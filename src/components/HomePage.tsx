import { useCallback, useState } from "react";
import { ChevronDownIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { MagicWand } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store"
import { createNewPassword } from "../slices/controlPanel/generate"

const HomePage: React.FC = () => {
    const password = useSelector((state: RootState) => state.generate.value) ?? "";
    const dispatch = useDispatch();

    const [isClicked, setIsClicked] = useState(false);
    function generateNewPassword() {
        setIsClicked(true);
        dispatch(createNewPassword());
    }

    const copyToClipboard = useCallback(() => {
        window.navigator.clipboard.writeText(password);
    }, [password]);

  return (
    <div className="flex flex-col">
        <div>
            <h1 className="text-center font-semibold text-5xl tracking-tight text-primaryFontColor">Breaches happen.<br />Be the exception, not the victim.</h1>
        </div>

        <div className="mt-8 mb-24">
            <p className="text-center text-xl tracking-tight text-primaryFontColor">Safeguard your things with strong locks. Secure now.</p>
        </div>

        <div>
            <div className="flex items-center max-w-2xl min-h-[100px] m-auto rounded-[28px] shadow-sh_Light">
                <div className="flex justify-between items-center w-full mx-6">
                    <div className="flex items-center gap-2">
                        <div className="py-2 px-3 bg-iconBgColor rounded-md font-medium text-sm tracking-tight text-iconColor">Alphanumeric</div>
                        <ChevronDownIcon className="h-4 w-4 text-iconColor stroke-2" />
                    </div>
                    <div className="w-full mx-3">
                        {/* <p className="flex items-center text-2xl font-semibold tracking-tight gap-2 text-primeTextColor">Click <span className="p-2 rounded-md bg-iconBgColor"><MagicWand weight="duotone" size={20} className="text-iconColor" /></span> for new password</p> */}
                        <p className="flex items-center text-2xl font-semibold tracking-tight gap-2 text-primeTextColor">
                            {
                             isClicked 
                               ? password
                               : <span className="flex">Click <span className="p-2 rounded-md bg-iconBgColor"><MagicWand weight="duotone" size={20} className="text-iconColor" /></span> for new password</span>
                            }                               
                        </p>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <div className="p-4 bg-iconBgColor rounded-full" onClick={generateNewPassword}><MagicWand weight="duotone" size={20} className="text-iconColor" /> </div>
                        <div className="p-2 hover:bg-iconBgColor rounded-md" onClick={copyToClipboard}><ClipboardDocumentIcon className="h-5 w-5 text-iconColor" /> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomePage;
