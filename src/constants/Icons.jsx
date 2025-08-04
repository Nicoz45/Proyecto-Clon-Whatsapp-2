import React from "react";
import { PiNumberCircleOneThin, PiNumberCircleTwoThin, PiNumberCircleThreeThin, PiNumberCircleFourThin } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { GrSettingsOption } from "react-icons/gr";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineLock } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { VscSend } from "react-icons/vsc";
import { LuMessageSquarePlus } from "react-icons/lu";
import { IoMdMore } from "react-icons/io";




const ICONS = {
    CircleOne: PiNumberCircleOneThin,
    CircleTwo: PiNumberCircleTwoThin,
    CircleThree: PiNumberCircleThreeThin,
    CircleFour: PiNumberCircleFourThin,
    Menu: IoMdMore,
    Settings: GrSettingsOption,
    Whatsapp: FaSquareWhatsapp,
    ArrowUpRight: GoArrowUpRight,
    lock: MdOutlineLock,
    exclamation: HiOutlineExclamationCircle,
    ArrowRightOpen: IoIosArrowForward,
    DeleteButton: RiDeleteBinLine,
    SendIcon: VscSend,
    MessageSquare: LuMessageSquarePlus,
}
export default ICONS