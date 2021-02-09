export default {
    props: ['msg'],
    template: 
    `
    <article>
    <h5>{{msg.message.name}} says:</h5>
    <p>{{msg.message.content}}</p>
    </article>
    `
}