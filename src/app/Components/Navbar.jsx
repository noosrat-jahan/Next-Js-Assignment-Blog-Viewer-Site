"use client";
import Link from 'next/link';
import React from 'react'
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';

const Navbar = () => {

	const { isAuthenticated, user, login, logout } = useKindeAuth();
	return (
		<div>
			<header className="p-4 bg-gray-700 text-white">
				<div className="container flex items-center justify-between h-16 mx-auto">
					<Link rel="noopener noreferrer" href={"/"} aria-label="Back to homepage" className="flex items-center p-2 text-amber-400 text-2xl">
						Blog Viewer
					</Link>
					<ul className="items-stretch justify-center hidden space-x-3 lg:flex">
						<li className="flex">
							<Link rel="noopener noreferrer" href={"/"} className="flex items-center px-4 -mb-1 text-lg dark:border- text-gray-100  border-amber-400">Home</Link>
						</li>
						<li className="flex">
							<Link rel="noopener noreferrer" href={`${isAuthenticated ? "/dashboard" : "/api/auth/login"}`} className="flex items-center px-4 -mb-1 text-lg dark:border- text-gray-100 border-amber-400">Profile</Link>
						</li>

					</ul>
					{
						isAuthenticated ? <LogoutLink prefetch={false}>
							<button className="self-center px-8 py-3 font-semibold rounded bg-amber-400 text-xl text-gray-900">Logout</button>
						</LogoutLink>
							: 
							<div className="items-center flex-shrink-0 hidden lg:flex">
								<LoginLink postLoginRedirectURL="/dashboard">
									<button className="self-center px-8 py-3 font-semibold rounded bg-amber-400 text-xl text-gray-900">Login</button>
								</LoginLink>
							</div>
					}

					<button className="p-4 lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>
			</header>
		</div>
	)
}

export default Navbar