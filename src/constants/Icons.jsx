import React from "react";
import { PiNumberCircleOneThin, PiNumberCircleTwoThin, PiNumberCircleThreeThin, PiNumberCircleFourThin } from "react-icons/pi";
import { GrSettingsOption, GrTarget} from "react-icons/gr";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineLock, MdOutlineSettings } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { IoIosArrowForward, IoMdMore, IoIosArrowDown } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuMessageSquarePlus, LuMessageSquareText, LuMessageCircleCode } from "react-icons/lu";
import { HiOutlineUserGroup, HiSearch } from "react-icons/hi";
import { BiSolidUserCircle, BiCheckDouble, BiCheck, BiVideo} from "react-icons/bi";
import { BsPlus, BsWhatsapp} from "react-icons/bs"
import { PiStickerBold } from "react-icons/pi";
import { IoSend } from "react-icons/io5"



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
    SendIcon: IoSend,
    MessageSquare: LuMessageSquarePlus,
    MessageSquareText: LuMessageSquareText,
    UserGroupIcon: HiOutlineUserGroup,
    GearSettings: MdOutlineSettings,
    UserCircle: BiSolidUserCircle,
    ChatBubble: LuMessageCircleCode,
    TargetIcon: GrTarget,
    Search: HiSearch,
    PlusIcon: BsPlus,
    StickerIcon: PiStickerBold,
    WhatsAppIcon: BsWhatsapp,
    DoubleCheck: BiCheckDouble,
    Check: BiCheck,
    Video: BiVideo,
    ArrowDown: IoIosArrowDown,
}
export default ICONS