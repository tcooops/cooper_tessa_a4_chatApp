export default {
    props: ['msg', 'socketid'],
    template: 
    `
    <article class="new-message" :class={ 'my-message' : matchedID }>
        <h5>{{msg.message.name}} says:</h5>
        <p>{{msg.message.content}}</p>
    </article>
    `,

    data: function() {
        return {
            matchedID: this.socketid == this.msg.id
        }
    }
}
