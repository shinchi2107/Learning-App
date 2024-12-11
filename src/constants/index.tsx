import IconExplore from "@/components/icons/IconExplore";
import IconPlay from "@/components/icons/IconPlay";
import IconProfile from "@/components/icons/IconProfile";
import { IMenu } from "@/types/menu";
import React from "react";

export const menuItems: IMenu[] = [
    {
        url: '/',
        title: 'Khu vực học tập',
        icon: <IconPlay className='size-5'/>
    },
    {
        url: '/',
        title: 'Khám phá',
        icon: <IconExplore className='size-5'/>
    },
    {
        url: '/',
        title: 'Profile',
        icon: <IconProfile className='size-5'/>
    }
]