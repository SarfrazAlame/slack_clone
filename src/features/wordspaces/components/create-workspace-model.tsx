"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCreateWorkspaceModel } from "../store/use-create-workspace-model";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const CreateWorkspaceModel = () => {
  const [open, setOpen] = useCreateWorkspaceModel();

  const handleClose = () => {
    setOpen(false);
    // TODO: clear form
  };

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <Input
            value=""
            disabled={false}
            required
            autoFocus
            minLength={3}
            placeholder="Workspace name e.g. 'Work', 'Personal', 'Home'"
          />
          <div className="flex justify-end">
            <Button disabled={false}>
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
