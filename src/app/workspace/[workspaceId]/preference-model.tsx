import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRemoveWorkspace } from "@/features/wordspaces/api/use-remove-workspace";
import { useUpdateWorkspace } from "@/features/wordspaces/api/use-update-workspace";
import { TrashIcon } from "lucide-react";
import { useState } from "react";

interface PreferencesmodelProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  initailValue: string;
}

export const PreferenceModel = ({
  open,
  setOpen,
  initailValue,
}: PreferencesmodelProps) => {
  const [value, setValue] = useState(initailValue);
  const [editOpen, setEditOpen] = useState(false);

  const { mutate: updateWorkspace, isPending: isUpdatingWorkspace } =
    useUpdateWorkspace();

  const { mutate: removeWorkspace, isPending: isRemovingWorkspace } =
    useRemoveWorkspace();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 bg-gray-50 overflow-hidden">
        <DialogHeader className="p-4 border-b bg-white">
          <DialogTitle>{value}</DialogTitle>
        </DialogHeader>
        <div className="px-4 pb-4 flex flex-col gap-y-2">
          <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">workspace name</p>
              <p className="text-sm text-[#1234a3] hover:underline font-semibold">
                Edit
              </p>
            </div>
          </div>

          <button
            disabled={false}
            onClick={() => {}}
            className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 text-rose-600"
          >
            <TrashIcon className="size-4" />
            <p className="text-sm font-semibold">Delete workspace</p>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
