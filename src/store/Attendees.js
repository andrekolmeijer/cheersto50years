export const Attendees = {
    namespaced: true,

    state: {
        burgersBeerAndBBQ: [
            { name: 'Bjorn', linnen: 'nee', diet: 'nee' },
            { name: 'Eline', linnen: 'nee', diet: 'nee' },
            { name: 'André', linnen: 'ja', diet: 'nee' },
        ],
        coffeeAndCake: [
            { name: 'Bjorn', diet: 'nee' },
            { name: 'Eline', diet: 'nee' },
        ],
        winingAndDining: [
            { name: 'Bjorn', linnen: 'nee', diet: 'nee' },
            { name: 'Eline', linnen: 'nee', diet: 'nee' },
            { name: 'André', linnen: 'nee', diet: 'nee' },
        ],
        bikesAndBeers: [
            { name: 'Bjorn', rental: 'ja', tandem: 'ja' },
            { name: 'Eline', rental: 'ja', tandem: 'Bjorn' },
            { name: 'André', rental: 'ja', tandem: 'nee' },
        ]
    },

    mutations: {},
    actions: {}
}
