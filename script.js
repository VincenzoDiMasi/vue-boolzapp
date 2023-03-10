console.log('Vue OK', Vue);

const app = Vue.createApp({
    data(){
        return {
            selectedIndex: 0, 
            newMessage: '', 
            searchContact : '',  
            

            user: {
                name: 'Nome Utente',
                avatar: '_io'
              },

            contacts: [
                {
                  name: 'Michele',
                  avatar: '_1',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Samuele',
                  avatar: '_3',
                  visible: true,
                  messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Luisa',
                  avatar: '_4',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                  ],
                 },
                 {
                    name: 'Luigi',
                    avatar: '_4',
                    visible: true,
                    messages: [{
                      date: '10/01/2020 15:30:55',
                      text: 'Lo sai che la tachipirina 500 se ne prendi due diventa 1000?',
                      status: 'sent'
                    },
                    {
                      date: '10/01/2020 15:50:00',
                      text: 'No, grazie.',
                      status: 'received'
                    }
                    ],
                   },
                   {
                    name: 'Franco',
                    avatar: '_1',
                    visible: true,
                    messages: [{
                      date: '10/01/2020 15:30:55',
                      text: 'Lo sai che ha aperto una nuova discoteca?',
                      status: 'sent'
                    },
                    {
                      date: '10/01/2020 15:50:00',
                      text: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                    }
                    ],
                   },
                   {
                    name: 'Leonardo',
                    avatar: '_2',
                    visible: true,
                    messages: [{
                      date: '10/01/2020 15:30:55',
                      text: 'Lo sai che ha aperto una nuova pescheria?',
                      status: 'sent'
                    },
                    {
                      date: '10/01/2020 15:50:00',
                      text: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                    }
                    ],
                   },
                   {
                    name: 'Lina',
                    avatar: '_4',
                    visible: true,
                    messages: [{
                      date: '10/01/2020 15:30:55',
                      text: 'Quanti anni hai?',
                      status: 'sent'
                    },
                    {
                      date: '10/01/2020 15:50:00',
                      text: '29',
                      status: 'received'
                    }
                    ],
                   },
                   {
                    name: 'Dino',
                    avatar: '_3',
                    visible: true,
                    messages: [{
                      date: '10/01/2020 15:30:55',
                      text: 'Lo sai che le rose sono rosse?',
                      status: 'sent'
                    },
                    {
                      date: '10/01/2020 15:50:00',
                      text: 'Forse',
                      status: 'received'
                    }
                    ],
                   },
              ],

                   
            }
        },

        // computed: {
        //     filteredContacts() {
        //       return this.contacts.filter(contact => {
        //         return contact.name.toLowerCase().includes(this.searchContact.toLowerCase())
        //       })
        //     }
        //   },

        methods:{
            changeCurrentIndex(index){
               this.selectedIndex = index;
            },
            getLastIndex(index){
                return this.contacts[index].messages.length -1;
            },
            addNewMessage(){
                if(this.newMessage){
                const message ={
                    date: new Date().toLocaleString(),
                    text: this.newMessage,
                    status: 'sent'
                }
                this.contacts[this.selectedIndex].messages.push(message);
                this.okAnswer();
                this.newMessage = '';
               
               }
             },

            
            
             okAnswer(){
                setTimeout (()=>{
                    const message ={
                        date: new Date().toLocaleString(),
                        text: 'ok',
                        status: 'received'
                    }
                    this.contacts[this.selectedIndex].messages.push(message);
                   
                },1000)
             },

             filterContacts(){
                this.contacts.forEach( contact =>{
                  contact.visible = contact.name.toLowerCase().includes(this.searchContact.toLowerCase());
                })
              },

              

              

             
             
        }
    

    })

app.mount('#board');