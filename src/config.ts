import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "aconst",
    name: "Auction Platform",
    chainId: "constantine-3",
    createdDate: "2024-06-08T00:00:00.000Z",
    modifiedDate: "2024-06-08T00:00:00.000Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "archway1ud34j9470xumceh6jrlxyu2xn6ssex3pl6re52d4e8ctj3c22tkqmcxhlq",
            cw721: "archway1qtee9wzqv69euygklcqh8uzlqsmelp780k2l0aq7r9c3vhlqxj2sjg97jh",
            name: "Stamp Collection",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ANDR1"
        },
    ],
};

export default CONFIG;
