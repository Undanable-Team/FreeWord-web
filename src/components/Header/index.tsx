"use client";
import React, { useRef, useEffect } from "react";
import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

export const Header = () => {
  const ref = useRef<React.LegacyRef<HTMLDivElement> | undefined>();
  const [show, setShow] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(false);

  const togglerInput = () => {
    setShowInput(!showInput);
  };

  const toggler = () => {
    setShow(!show);
  };

  useEffect(() => {
    document.addEventListener("keydown", hideOnClickOutside, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShow(false);
    }
  };

  return (
    <>
      <header className={style.header}>
        <Image
          src="./logo.svg"
          alt="My image"
          className={style.logo}
          width={160}
          height={46}
        ></Image>

        

        <div className={clsx(style.input_con, showInput && style.activeInput)}>
          <div className={style.wrap}>
            <Image
              className={style.search}
              src="./search.svg"
              width={20}
              height={20}
              alt=""
            ></Image>
            <input
              placeholder="Найдите нужное вам место"
              className={style.input}
              type="search"
            />
            <button className={style.button}>Поиск</button>
          </div>
        </div>
        <div className={style.profile} ref={ref}>
          <div className={style.wraplist}>
            <div className={style.list} onClick={toggler}>
              <Image src="./profile.svg" width={30} height={30} alt="" />
              <h5 className={style.option}>Proifle</h5>
              <Image src="./znak.svg" alt="" width={9} height={14} />
            </div>
            <div className={clsx(style.listinner, show && style.active)}>
              <Link className={style.Link} href="/profile">
                Profile
              </Link>
              <Link className={style.Link} href="/profile">
                Exit
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
