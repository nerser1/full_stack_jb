type DOMAttr = { userName: HTMLInputElement | null, password: HTMLInputElement | null, registerResponse: HTMLDivElement | null, loginResponse: HTMLDivElement | null }

const DOM: DOMAttr = {
    userName: null,
    password: null,
    registerResponse: null,
    loginResponse: null
}

function init() {
    DOM.userName = document.querySelector<HTMLInputElement>("#userName")
    DOM.password = document.querySelector<HTMLInputElement>("#password")
    DOM.registerResponse = document.querySelector("#registerResponse")
    DOM.loginResponse = document.querySelector("#loginResponse")
    document.getElementById("registerAction")?.addEventListener("click", async () => {
        try {
            const result = await registerApi({ userName: DOM.userName?.value as string, password: DOM.password?.value as string })
            if (DOM.registerResponse) {
                DOM.registerResponse.innerText = result;
            }
        } catch (ex: any) {
            if (DOM.registerResponse) {
                DOM.registerResponse.innerText = ex.message;
            }
        }

    })

    document.getElementById("registerAction")?.addEventListener("click", async () => {
        try {
            const result = await loginApi({ userName: DOM.userName?.value as string, password: DOM.password?.value as string })
            if (DOM.registerResponse) {
                DOM.registerResponse.innerText = result;
            }
        } catch (ex: any) {
            if (DOM.registerResponse) {
                DOM.registerResponse.innerText = ex.message;
            }
        }

    })


}
const users: { userName: string, password: string }[] = []
async function registerApi(payload: { userName: string, password: string }): Promise<string> {
    const rawResponse = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const content = await rawResponse.text();
    console .log(content)
    return content;
}

async function loginApi(payload: { userName: string, password: string }): Promise<string> {
    const rawResponse = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const content = await rawResponse.text();
    return content;
}


init()