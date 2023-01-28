var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { connection } from "../database/server.js";
export function getGastos(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var lancamentos, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connection.query("SELECT * FROM lancamentos")];
                case 1:
                    lancamentos = _a.sent();
                    res.status(201).send(lancamentos.rows);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    res.sendStatus(400);
                    console.log(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export function lancaGastos(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, valor, nome, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, valor = _a.valor, nome = _a.nome;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connection.query("INSERT INTO lancamentos (valor, nome) VALUES ($1, $2)", [valor, nome])];
                case 2:
                    _b.sent();
                    res.sendStatus(201);
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _b.sent();
                    res.sendStatus(400);
                    console.log(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function alteraGastos(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, valor, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    valor = req.body.valor;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connection.query("UPDATE lancamentos SET valor = $1 WHERE id = $2", [
                            valor,
                            id,
                        ])];
                case 2:
                    _a.sent();
                    res.status(201).send("valor alterado");
                    return [3 /*break*/, 4];
                case 3:
                    err_3 = _a.sent();
                    res.sendStatus(400);
                    console.log(err_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function deletaGastos(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connection.query("DELETE FROM lancamentos WHERE id = $1", [id])];
                case 2:
                    _a.sent();
                    res.status(201).send("Lancamento deletado com sucesso");
                    return [3 /*break*/, 4];
                case 3:
                    err_4 = _a.sent();
                    res.sendStatus(400);
                    console.log(err_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function filtraGastos(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var valor, lancamentosFiltrados, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    valor = req.body.valor;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connection.query("SELECT * FROM lancamentos WHERE valor >= $1;", [valor])];
                case 2:
                    lancamentosFiltrados = _a.sent();
                    res.status(201).send(lancamentosFiltrados.rows);
                    return [3 /*break*/, 4];
                case 3:
                    err_5 = _a.sent();
                    res.sendStatus(400);
                    console.log(err_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
