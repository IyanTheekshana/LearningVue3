const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenzo",
          phone: "01234567891",
          email: "manuel@localhost.it",
        },
        {
          id: "john",
          name: "John Cena",
          phone: "01234567891",
          email: "john@localhost.it",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
        <li>
          <h2>{{friend.name}}</h2>
          <button v-on:click="showOrHide()">Show Details</button>
          <ul v-if="!detailsAreVisible">
            <li><strong>Phone: </strong>{{friend.phone}}</li>
            <li><strong>Email: </strong> {{friend.email}}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenzo",
        phone: "01234567891",
        email: "manuel@localhost.it",
      },
    };
  },
  methods: {
    showOrHide() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
