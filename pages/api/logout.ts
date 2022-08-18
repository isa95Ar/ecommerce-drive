import Cookies from 'cookies';

export default async function logout(req, res) {

    try {
        const cookies = new Cookies(req, res)
        cookies.set("google_credentials")

        res.redirect('/#logout');
    }catch (e) {
        res.json(e);
    }
}