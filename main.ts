// Program menulis monolog pemenang turnamen (lich auditor, 100 kata)
// ke /output/entry.txt. Deterministik: tanpa randomness, tanpa network,
// tanpa membaca file di luar repo.
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE = "Sit. No, not the throne, the chair with the wobbling leg. I kept it. Thirty years I have counted souls, and the ledger still refuses to balance. Your village owes three hundred and twelve. You brought two hundred and ninety. I can smell the missing twenty-two on your overcoat, farmer. Do not kneel. Kneeling takes longer. My phylactery is a filing cabinet now. Third drawer. It sticks every winter. I used to raise armies. Now I raise objections. Sign here. And here. The ink is blood, obviously, but the pen is mine, and I would like it back. Next petitioner.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");
