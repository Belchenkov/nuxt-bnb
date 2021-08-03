export async function unWrap(response) {
    try {
        const data = await response.json();
        const { ok, status, statusText } = data;

        return {
            data,
            ok,
            status,
            statusText,
        };
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export function getErrorResponse(error) {
    return {
        ok: false,
        status: 500,
        statusText: error.message,
        data: {}
    };
}