Vue.component('msg-text', {
    props: {
        text: String,
        emitter: String
    }, 
    template: '<div class="msg col-12" v-bind:class="emitter">{{ text }}</div>',
    created() {

    }
});

new Vue({
    el: "#app",
    data: {
        msgList: [{
                emitter: "user",
                text: "Hola, estoy buscando un desarrollador. Tengo una increible idea y necesito tu ayuda para materializarla! "
            },
            {
                emitter: "me",
                text: "Hola qué tal, mi nombre es Luis y soy desarrollador web fullstack ¿Cómo puedo ayudarte? "
            },
            {
                emitter: "me",
                text: "Me especializo en desarrollo de interfaces web y single page applications, me gusta mucho usar Vue y nodejs para mis proyectos  "
            },
            {
                emitter: "user",
                text: "Me especializo en desarrollo de interfaces web y single page applications, me gusta mucho usar Vue y nodejs para mis proyectos  "
            },
        ], 

    },
    methods: {
        writeMsg(evento){
            console.log(evento.target.value);
            const inputChatStr = evento.target.value;
            const newMsg = {
                emitter:'user',
                text: inputChatStr
            }
            this.msgList.push(newMsg)
        }
    }
});