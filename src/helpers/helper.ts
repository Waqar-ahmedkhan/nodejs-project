import crypto from "crypto";

const secret = "vicki-best-api";

export const random = () => crypto.randomBytes(128).toString("base64");

export const authication = (salt: string, password: string) => {
    return crypto.createHmac("sha256", salt + "/" + password)
                 .update(secret)
                 .digest("hex");
};
