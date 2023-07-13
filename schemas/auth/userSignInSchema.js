import joi from "joi";

const userSignUp = joi.object({
    email: joi.string()
        .required()
        .email({
            minDomainSegments:2
        }),
    password: joi.string()
        .required()
        .min(8)
        .max(35)
        .alphanum(),
})

export default userSignUp