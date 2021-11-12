/* creare una todolist in cui l'utente può barrare le cose già fatte e inserire nuove task */

/* andiamo a collegare in vue il contenitore dei vari elementi che varranno stampati */

var containerTasks  = new Vue (

    {

        el: "#container",

        data: {

            newTask:{
                text: "",
                done: "false"
            },

            /* andiamo a creare un'array di oggetti per stampare gli elementi */

            tasks: [

                {
                    text: "Preparare il pranzo",
                    done: false
                },

                {
                    text: "Fare la spesa",
                    done: false
                },

                {
                    text: "Fare il bucato",
                    done: false
                },

                {
                    text: "Studiare",
                    done: false
                },

                {
                    text: "Andare in palestra",
                    done: false
                },

                {
                    text: "Uscire con gli amici",
                    done: false
                },

            ]

        },

        /* andiamo a creare delle funzioni per cui l'utente può barrare le task già fatte */

        methods: {

            addLine(index){

                if(this.tasks[index].done === false){

                    this.tasks[index].done = true;

                } else {

                    this.tasks[index].done = false;

                }

            },

            removeTask(index){

                this.tasks.splice(index, 1);

            },

            /* andiamo a creare una funzione per far aggiungere all'utente le proprie task */

            addTask(){

                this.tasks.push(this.newTask);
                this.newTask = {

                    text: "",
                    done: false

                }

            }

        }

    }

)
