'use client'

import { useTheme } from "next-themes";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";

export function ModeToggle() {
    const {setTheme} = useTheme();

    return (<DropdownMenu>
        <DropdownMenuTrigger>
           <Button variant="ghost" className="w-10 px-0">
               <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0"/>
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
               <span className="sr-only">Toggle Theme</span>
           </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
                System
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>)
}