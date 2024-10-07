import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCreateChannelModel } from "../store/use-create-channels-model";

export const CreateChannelModel = () => {
  const [open, setOpen] = useCreateChannelModel();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a channel</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
