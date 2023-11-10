export const getAntdFieldRequiredRule = (message: string) => {
    return [
        {
            required: true,
            message,
        }
    ]
}