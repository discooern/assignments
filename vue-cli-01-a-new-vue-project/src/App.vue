<template>
<section>
  <h2>My Friends</h2>
  <ul>
    <li v-for="friend in friends" :key="friend-id">{{ friend }}</li>
  </ul>
  </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '0123 45678 90',
                email: 'manuel@localhost.com'
                },
                {
                id: 'julie',
                name: 'Julie Jones',
                phone: '0987 65432 10',
                email: 'julie@localhost.com'
                }
            ]
        }
    }
}
</script>