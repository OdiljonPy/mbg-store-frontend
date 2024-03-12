import { EnumGender, IUser } from "@/data-types/auth/user";
import { IUpdateUserRequest, updateUserData } from "@/slices/auth/user";
import { AppDispatch } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const usePersonalData = (user: IUser) => {
	const [isEdit, setIsEdit] = useState<boolean>(false);

	const [fullName, setFullName] = useState<IUser["full_name"]>("");
	const [gender, setGender] = useState<EnumGender>();
	const [birthDate, setBirthDate] = useState<IUser["birth_date"]>();

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		setFullName(user.full_name || "");
		setGender(user.gender);
		setBirthDate(user.birth_date || undefined);
	}, [user]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const payload: IUpdateUserRequest = {
			full_name: fullName || "",
			gender: gender,
			birth_date: birthDate || null,
		};

		dispatch(updateUserData(payload))
			.unwrap()
			.then(() => {
				setIsEdit(false);
			});
	};

	return {
		isEdit,
		setIsEdit,
		fullName,
		setFullName,
		gender,
		setGender,
		birthDate,
		setBirthDate,
		onSubmit,
	};
};
