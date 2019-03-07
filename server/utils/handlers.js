const handleError = err => ({
    ok: false,
    err
})

const handleResponse = response => ({
    ok: true,
    response
});

export {
    handleError,
    handleResponse
}