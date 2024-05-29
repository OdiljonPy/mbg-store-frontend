import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

import CheckCircle from "@/../public/images/icons/check-circle.svg";
import { Icons } from "@/components/shared/icons";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";

import css from "./index.module.css";

interface Props {
	isValid: boolean;
	setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
}

function NewPasswordField({ setIsValid, isValid, setPassword }: Props) {
	const t = useTranslations("auth.new_password");
	const [showPassword, setShowPassword] = useState(false);
	const [passwordRequirement, setPasswordRequirement] = useState([
		{
			id: 1,
			title: "min_length",
			isValid: false,
		},
		{
			id: 2,
			title: "min_one_letter",
			isValid: false,
		},
		{
			id: 3,
			title: "min_one_digit",
			isValid: false,
		},
	]);

	const validatePassword = (newPassword: string) => {
		const updatedRequirements = passwordRequirement.map((requirement) => {
			switch (requirement.id) {
				case 1:
					return { ...requirement, isValid: newPassword.length >= 8 };
				case 2:
					return {
						...requirement,
						isValid: /[a-zA-Zа-яА-Я]/.test(newPassword),
					};
				case 3:
					return { ...requirement, isValid: /\d/.test(newPassword) };
				default:
					return requirement;
			}
		});
		setPasswordRequirement(updatedRequirements);
	};

	useEffect(() => {
		setIsValid(
			!passwordRequirement?.map((item) => item.isValid).includes(false)
		);
	});

	return (
		<div className={css.input_wrapper}>
			<Label htmlFor='password-12345'>{t("label")}</Label>
			<Input
				id='password-12345'
				className={css.input}
				type={showPassword ? "text" : "password"}
				placeholder={t("placeholder")}
				onChange={(e) => {
					setPassword(e.target.value);
					validatePassword(e.target.value);
				}}
			/>
			<ul
				className={css.validationBox}
				style={{ display: isValid ? "none" : "" }}
			>
				{passwordRequirement?.map((item) => (
					<li className={css.validation} key={item.title}>
						<p>{t(item.title)}</p>
						{item.isValid ? (
							<Image src={CheckCircle} alt={""} />
						) : (
							""
						)}
					</li>
				))}
			</ul>
			{showPassword ? (
				<Icons.eye
					onClick={() => setShowPassword(false)}
					className={css.endIcon}
				/>
			) : (
				<Icons.eyeOff
					onClick={() => setShowPassword(true)}
					className={css.endIcon}
				/>
			)}
		</div>
	);
}

export default NewPasswordField;
