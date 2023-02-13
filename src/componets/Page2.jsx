import "./page2.css"

export function Page2(){
    const title = ['Grow Together', 'Flowing Conversion', 'Your User']
    const img = ['illustration-grow-together.svg' , 'illustration-flowing-conversation.svg', 'illustration-your-users.svg']
    const p = ['Generate meaningful discussions with your audience and build a strong ,loyal community. Think  of the insightful conversations you miss out on wiht a feedback form.', "You Wouldn't paginate a conversartion in real life, So why do it online? Our threads have just-in-time loanding  for a more natural flow. ", "It takes no times at all to integrate Hunddle with your app's authentication solution. This means, once signed in to your app. your users can start chatting inmmediately."]

    return (
        <div className="page2">
        {title.map((e, i)=>{
            return (
                <section key={i}>
                <img src={"./images/" + img[i]} alt="img" />
                <div>
                    <h2>{e}</h2>
                    <p>{p[i]}</p>
                </div>
            </section>
            )
        })}
        </div>
    )
}