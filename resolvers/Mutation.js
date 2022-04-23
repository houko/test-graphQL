exports.Mutation = {
    addSite: (parent, {input}, context) => {
        const {authInfo, sites} = context;
        if (!authInfo) {
            throw new Error('You are not authorized to update sites');
        }
        const newSite = {
            id: sites.length + 1,
            title: input.title,
            url: input.url,
            logo: input.logo,
            category: input.category,
            pageViews: 0,
        }
        sites.push(newSite);
        return newSite;
    },
    updateSite: (parent, {id, input}, context) => {
        const {sites} = context;
        const site = sites.find(site => site.id === id);
        if (!site) {
            throw new Error(`Site with id ${id} not found`);
        }
        site.title = input.title;
        site.url = input.url;
        site.logo = input.logo;
        site.category = input.category;
        return site;
    },
    deleteSite: (parent, {id}, context) => {
        const {sites} = context;
        const site = sites.find(site => site.id === id);
        console.log(site)
        if (!site) {
            throw new Error(`Site with id ${id} not found`);
        }
        sites.splice(sites.indexOf(site), 1);
        return site;
    },
}
