// src/components/Header/Header.tsx
'use client';

import Image from 'next/image';
import * as S from './Header.styles';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FaUserAlt, FaBriefcaseMedical } from 'react-icons/fa';

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const Header = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const mainNavItems = [
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Ajuda', href: '/ajuda' },
  ];

  const dropdownItems = [
    { label: 'Paciente', icon: <FaUserAlt />, href: '/pessoa-usuaria' },
    { label: 'Profissional', icon: <FaBriefcaseMedical />, href: '/profissional' },
  ];

  return (
    <S.HeaderWrapper>
      <S.LogoContainer href="/"> 
        <Image
          src="/logo_lacrei.svg" 
          alt="Lacrei Saúde"
          width={187}
          height={24}
          priority
        />
      </S.LogoContainer>

      <S.NavAndActionsContainer>
        <S.Nav>
          {mainNavItems.map((item) => (
            <S.NavLink
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'active' : ''}
            >
              {item.label}
            </S.NavLink>
          ))}
        </S.Nav>

        <S.LoginActionContainer ref={dropdownRef}>
          <S.LoginButton onClick={toggleDropdown} aria-expanded={isDropdownOpen} aria-haspopup="true">
            Entrar
            <ChevronDownIcon />
          </S.LoginButton>
          {isDropdownOpen && (
            <S.DropdownMenu>
              {dropdownItems.map((item) => (
                <S.DropdownLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsDropdownOpen(false)} 
                  className={pathname === item.href ? 'active' : ''}
                >
                  {item.icon && <span>{item.icon}</span>}
                  {item.label}
                </S.DropdownLink>
              ))}
            </S.DropdownMenu>
          )}
        </S.LoginActionContainer>
      </S.NavAndActionsContainer>
    </S.HeaderWrapper>
  );
};

export default Header;