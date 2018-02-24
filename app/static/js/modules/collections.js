//  Stores the data from the API
export const collections = {
    all: [],
    map() {
        const memeData = this.all.map((obj) => {
            return {
                displayName: obj.displayName,
                imageUrl: obj.imageUrl,
                href: obj.displayName.toLowerCase().replace(/ $/, "").split(' ').join('-')
            }
        })
        return memeData
    },
    filter(name) {
        const memeData = this.map()
        const selectedMeme = memeData.filter((obj) => {
            return obj.href === name;
        })
        return selectedMeme
    },
    sort() {
        const memesAlphabetic = this.map()
        memesAlphabetic.sort((a, b) => {
            if(a.displayName.toLowerCase() < b.displayName.toLowerCase()) return -1;
            if(a.displayName.toLowerCase() > b.displayName.toLowerCase()) return 1;
            return 0;
        })
        return memesAlphabetic;
    }
}