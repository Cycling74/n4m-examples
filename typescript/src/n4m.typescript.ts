import maxAPI from "max-api";

maxAPI.post(`Running in MAX_ENV: ${process.env.MAX_ENV as string}`);

maxAPI.addHandler(maxAPI.MESSAGE_TYPES.BANG, async () => {
	await maxAPI.outletBang();
});

maxAPI.addHandler(maxAPI.MESSAGE_TYPES.NUMBER, async (num: number) => {
	await maxAPI.outlet("num", `${num}`);
});

maxAPI.addHandler("list_messages", async () => {
	await maxAPI.post(`MESSAGE_TYPES:\n${Object.keys(maxAPI.MESSAGE_TYPES).join("\n")}`);
});

maxAPI.addHandler("list_levels", async () => {
	await maxAPI.post(`POST_LEVELS:\n${Object.keys(maxAPI.POST_LEVELS).join("\n")}`);
});

const levelHandlers: Record<maxAPI.MaxFunctionSelector, maxAPI.MaxFunctionHandler> = {};
for (const level of Object.values(maxAPI.POST_LEVELS)) {
	levelHandlers[level] = async (msg: string) => {
		await maxAPI.post(`echo ${msg}`, level);
	};
}

maxAPI.addHandlers(levelHandlers);

const dictID = "n4m.test.dict";

maxAPI.addHandler("write_dict", async () => {
	const d = await maxAPI.getDict(dictID);
	await maxAPI.setDict(dictID, { counter: (d?.counter as number || 0) + 1, timestamp: new Date().toISOString() });
});

maxAPI.addHandler("update_dict", async () => {
	const d = await maxAPI.getDict(dictID);
	await maxAPI.updateDict(dictID, "counter", (d?.counter as number || 0) + 1);
	await maxAPI.updateDict(dictID, "timestamp", new Date().toISOString());
});
