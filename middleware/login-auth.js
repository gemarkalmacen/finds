export default async function ({ app , redirect}) {
    console.log(app.$auth.$state)
    // redirect to login page if the user is not authenticated
    if (!app.$auth.isloggedIn) {
        console.log("adsdsd")
        redirect("/dashboard")
    }
}