module PokéNFT::Marketplace {
    use std::signer;
    use std::vector;
    use aptos_framework::coin::{Self as Coin, Coin};
    use aptos_framework::event::{EventHandle};

    struct PokemonNFT has key {
        id: u64,
        owner: address,
        species: vector<u8>,
        level: u8,
        evolved: bool,
    }

    struct MintEvent has copy, drop {
        creator: address,
        pokemon_id: u64,
    }

    struct EvolveEvent has copy, drop {
        owner: address,
        pokemon_id: u64,
        new_level: u8,
    }

    struct UserStore has key {
        nfts: vector<PokemonNFT>,
        evolution_coins: Coin,
    }

    struct Listing has key {
        seller: address,
        nft_id: u64,
        price: u64,
    }

    public fun mint_pokemon(account: &signer, species: vector<u8>) {
        let nft_id = generate_nft_id();
        let owner = signer::address_of(account);
        let pokemon = PokemonNFT {
            id: nft_id,
            owner,
            species,
            level: 1,
            evolved: false,
        };

        let user_store = borrow_global_mut<UserStore>(owner);
        vector::push_back(&mut user_store.nfts, pokemon);

        emit_event<MintEvent>(
            &mut borrow_global_mut<UserStore>(owner).mint_event_handle,
            MintEvent { creator: owner, pokemon_id: nft_id }
        );
    }

    public fun evolve_pokemon(account: &signer, nft_id: u64) {
        let owner = signer::address_of(account);
        let user_store = borrow_global_mut<UserStore>(owner);

        let nft_ref = find_pokemon_by_id(&mut user_store.nfts, nft_id);
        assert!(nft_ref.owner == owner, 401);

        if (nft_ref.level < 5) {
            nft_ref.level = nft_ref.level + 1;
        } else {
            nft_ref.evolved = true;
        }

        emit_event<EvolveEvent>(
            &mut user_store.evolve_event_handle,
            EvolveEvent { owner, pokemon_id: nft_id, new_level: nft_ref.level }
        );
    }

    public fun list_for_sale(account: &signer, nft_id: u64, price: u64) {
        let seller = signer::address_of(account);
        let user_store = borrow_global_mut<UserStore>(seller);

        let nft_ref = find_pokemon_by_id(&mut user_store.nfts, nft_id);
        assert!(nft_ref.owner == seller, 401);
        nft_ref.owner = 0x0;

        let listing = Listing {
            seller,
            nft_id,
            price,
        };

        let market = borrow_global_mut<Marketplace>(0x1);
        vector::push_back(&mut market.listings, listing);
    }

    fun find_pokemon_by_id(nfts: &mut vector<PokemonNFT>, id: u64): &mut PokemonNFT {
        let index = vector::index_of_with(nfts, id, |nft| nft.id == id);
        assert!(index != option::none(), 404);
        vector::borrow_mut(nfts, index);
    }

    fun generate_nft_id(): u64 {
        let timestamp = aptos_framework::timestamp::now_seconds();
        timestamp
    }
}