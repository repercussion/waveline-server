import { prop, Typegoose, getModelForClass } from "@typegoose/typegoose";

export class Info {
	@prop()
	public start: Date;

	@prop()
	public end: Date;

	@prop()
	public last_scan: Date;

	@prop()
	public seconds: number;

	@prop()
	public tracks: number;

	@prop()
	public albums: number;

	@prop()
	public artists: number;

	@prop()
	public size: number;

	@prop()
	public mount: string;
}

export const InfoModel = getModelForClass(Info);
