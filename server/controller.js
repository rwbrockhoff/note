module.exports = {
    checkuser: (req, res, next) => {
        const dbInstance = req.app.get('db');
        

        const { sub } = req.session.user;
      
        dbInstance.check_user(sub).then(userStatus => {
            console.log(userStatus);
            res.status(200).send(userStatus)
        })
    },

    register: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const {given_name, family_name} = req.session.user;
        let fullName = given_name + " " + family_name;

        const { sub, email } = req.session.user;
        
        dbInstance.create_user([sub, fullName, email]).then( res => {
            res.sendStatus(200)
        })
    },

    getnotes: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const { sub } = req.session.user;

        dbInstance.get_notes(sub).then( notes => {
            res.status(200).send(notes)
        })
    },

    updatenote: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const {title, note_id} = req.body;
        const {sub} = req.session.user;
       
        dbInstance.update_note([title, sub, note_id]).then( notes => {
            res.status(200).send(notes);
        })
    },

    deleteNote: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const {id} = req.params
        const {sub} = req.session.user;
        console.log(sub, id)
        dbInstance.delete_note([sub, id]).then( notes => {
            res.status(200).send(notes)
        })
    },

    createnote: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const {title, content} = req.body;
        console.log('HOLLLLLA', title, content)
    }
}