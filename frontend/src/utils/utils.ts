export const pick = <T, K extends keyof T>(
    obj: T,
    ...keys: K[]
): Pick<T, K> => {
    const copy: any = {};

    for (const key of keys) {
        copy[key] = obj[key];
    }

    return copy;
};
