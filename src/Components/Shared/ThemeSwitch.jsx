"use client";

import { Check, Moon, Power, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme(); 
    const [effect, setEffect] = useState(false);

    useEffect(() => {
        setEffect(true);
    }, [])

    if (!effect) return <div className="size-4"></div>;
    return (
        <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")} className="ml-4 mt-1" >
            {() => (
                <>
                    <div
                        className={`h-[21px] w-[31px] transition-all duration-200 delay-200 rounded-full bg-black ${theme === "dark" ? "rounded-full bg-white shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
                    >
                        <div
                            className={`rounded-full size-[17px] transition-all duration-200 delay-200 dark:bg-white bg-black shadow-sm ${theme === "dark" ? "ms-[12px] shadow-lg" : ""}`}
                        >
                            <div className="flex items-center justify-center w-full h-full pt-1" >
                                {theme === "dark" ? (
                                    <Sun className=" size-4 text-black rounded-full transition-all duration-200 delay-200" />
                                ) : (
                                    <Moon className="size-4 text-white rounded-full transition-all duration-200 delay-200" />
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Switch>
    );
}


