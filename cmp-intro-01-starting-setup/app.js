const app = Vue.createApp({
    data() {
        return {
            friends: [
                { 
                    id: 'manuel', 
                    name: 'Manuel Lorenz', 
                    phone: '01234 5678 991', 
                    email: 'manuel@localhost.com' 
                },
                { 
                    id: 'julie', 
                    name: 'Julie Jones', 
                    phone: '0987 543 221', 
                    email: 'julie@localhost.com' 
                },
            ],
        };
    }
});

app.component('friend-contact', {
    template: `
    <li v-for="friend in friends" :key="friend.id">
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
    data() {
        return {
            detailsAreVisible: false,
            friends: [
            { 
                id: 'manuel', 
                name: 'Manuel Lorenz', 
                phone: '01234 5678 991', 
                email: 'manuel@localhost.com' 
            }
            ]
        }
    },
    methods: {
        toggleDetails() {
          this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');