import { ChevronDownIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { MagicWand } from "@phosphor-icons/react";

const Generator: React.FC = () => {
  return (
    <div className="flex flex-col">
        <div>
            <h1 className="text-center">Breaches happen.<br />Be the exception, not the victim.</h1>
        </div>

        <div>
            <p className="text-center">Safeguard your things with strong locks. Secure now.</p>
        </div>

        <div>
            <div className="flex items-center max-w-3xl min-h-[100px] m-auto rounded-[28px] shadow-sh_Light">
                <div className="flex justify-between items-center w-full mx-6 gap-2">
                    <div className="flex items-center w-1/5 gap-2">
                        <div className="py-2 px-3 bg-iconBgColor rounded-md font-medium text-sm tracking-tight text-iconColor">Alphanumeric</div>
                        <ChevronDownIcon className="h-4 w-4 text-iconColor stroke-2" />
                    </div>
                    <div className="w-4/5">
                        <p className="flex items-center text-2xl font-semibold tracking-tight gap-2 text-primeTextColor">Click <span className="p-2 rounded-md bg-iconBgColor"><MagicWand weight="duotone" size={20} className="text-iconColor" /></span> for new password</p>
                    </div>
                    <div className="flex items-center justify-end w-1/5 gap-3">
                        <div className="p-4 bg-iconBgColor rounded-full"><MagicWand weight="duotone" size={20} className="text-iconColor" /> </div>
                        <div className="p-2 hover:bg-iconBgColor rounded-md"><ClipboardDocumentIcon className="h-5 w-5 text-iconColor" /> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Generator;
