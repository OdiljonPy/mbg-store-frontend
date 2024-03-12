import { EnumGender, IUser } from "@/data-types/auth/user";
import { useEffect, useState } from "react";

export const usePersonalData = (user: IUser) => {
	const [edit, setEdit] = useState<boolean>(false);

	const [fullName, setFullName] = useState<string>("");
	const [gender, setGender] = useState<EnumGender>();
	const [birthDate, setBirthDate] = useState<string | undefined>();

	useEffect(() => {
		setFullName(user?.full_name || "");
		setGender(user?.gender);
		setBirthDate(user?.birth_date);
	}, [user]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(fullName);
		console.log(gender);
		console.log(birthDate);
		setEdit(false);
	};

	return {
		edit,
		setEdit,
		fullName,
		setFullName,
		gender,
		setGender,
		birthDate,
		setBirthDate,
		onSubmit,
	};
};
