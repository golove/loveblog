export const state = () => ({
    user: {},
    content: {
        avatars: [],
        letters: [],
        letters2: [],
        jokes: [],
        news: [],
        pictures: [],
        collectPic: [],
        types: [],
        userList: [],
        userArticle: [],
        myArticle: [],
        collect: [],
        comment: []

    },
})

export const mutations = {
    setdata(state, json) {
        state.content[json.type] = json.data.reverse()
        // console.log(state.content[json.type])
    },
    pushdata(state, json) {
        state.content[json.type].unshift(json.data)
    },

    // 
    remove(state, n) {
        state.content.letters.splice(n, 1)
    },
    shuffle(state) {
        state.content.letters = _.shuffle(state.content.letters)
    },

    //user login 
    USERLOGIN(state, user) {
        state.user = user;
        //save login infomations
        window.sessionStorage.setItem('user', JSON.stringify(user))
    },
    //user exit
    USEREXIT(state) {
        state.user = {};
        window.sessionStorage.removeItem('user');
    },

    // 
    articleEdit(state, json) {
        state.content.letters.forEach(e => {
            if (e._id === json.data._id) {
                if (e[json.type] instanceof Array) {
                    let n = e[json.type].indexOf(state.user)
                    if (n > -1) {
                        e[json.type].splice(n, 1)

                        this.$axios.post('/api/delArray', { id: e._id, [json.type]: state.user })

                    } else {
                        e[json.type].push(state.user)

                        this.$axios.post('/api/addArray', { id: e._id, [json.type]: state.user })

                    }
                } else if (json.type === 'see') {
                    e[json.type]++
                    this.$axios.post('/api/updateInt', { id: e._id, see: 1 })
                        .then(res => {
                            console.log(res)
                        })

                }
            } else if (e._id === json.data.articleId) {
                if (json.type === 'reply') {
                    e.reply.unshift(json.data)

                }
            }
        })
    },

}


export const actions = {
    async getdata({ commit }, json) {
        let res = await this.$axios.get(json.api)
        if (json.type === 'letters') {
            commit('setdata', { type: 'letters2', data: res })
        }

        if (res instanceof Array) {
            commit('setdata', { type: json.type, data: res })
        } else {
            if (res.data instanceof Array) {
                commit('setdata', { type: json.type, data: res.data })
            } else {
                commit('setdata', { type: json.type, data: res.data.list })
            }
        }
    },

    // user login
    userlogin({
        commit
    }, data) {
        commit('USERLOGIN', data);
    },
    // user exit
    userexit({
        commit
    }, data) {
        commit('USEREXIT');
    }



}
