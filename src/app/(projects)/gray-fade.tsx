import { Dispatch, SetStateAction } from "react";
import "./projects.css";

export default function GrayFade({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return <div className='gray-fade' onClick={() => setIsOpen(false)}></div>;
}
