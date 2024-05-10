import { Button } from "../ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";

import { HiOutlineMail, HiOutlineDeviceMobile } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between gap-4 bg-neutral-950 px-32 py-4 text-neutral-50 md:px-8">
      <a href="#" className="font-bold text-2xl">
        Portfolio
      </a>
      <ul className="flex justify-between items-center gap-4 font-light text-sm">
        <li>
          <Button>
            <AlertDialog>
              <AlertDialogTrigger>Contato</AlertDialogTrigger>
              <AlertDialogContent className="md:w-[300px]">
                <AlertDialogHeader>
                  <AlertDialogTitle>Contratando ?</AlertDialogTitle>
                  <AlertDialogDescription>
                    <p className="mb-2 text-sm">
                      Caso esteja contratando ficarei feliz em receber uma
                      oportunidade.
                    </p>
                    <div>
                      <div className="flex items-center gap-2 ">
                        <HiOutlineMail className="text-2xl" />
                        <span className="text-sm">tiago3d2s3@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2 ">
                        <HiOutlineDeviceMobile className="text-2xl" />
                        <span className="text-sm">(44) 99128 - 9326</span>
                      </div>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction className="flex-1">
                    Voltar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
