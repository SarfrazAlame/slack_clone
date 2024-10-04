import { atom, useAtom } from "jotai"

const modelState = atom(false)

export const useCreateWorkspaceModel = () => {
    return useAtom(modelState)
}

