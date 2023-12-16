process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import './config.js';
import _0x1f331b, { join } from 'path';
import { platform } from 'process';
import _0x42bcd5 from 'chalk';
import { fileURLToPath, pathToFileURL } from 'url';
import { createRequire } from 'module';
global.__filename = function filename(_0x5804e0 = import.meta.url, _0x481dc2 = platform !== 'win32') {
  return _0x481dc2 ? /file:\/\/\//.test(_0x5804e0) ? fileURLToPath(_0x5804e0) : _0x5804e0 : pathToFileURL(_0x5804e0).toString();
};
global.__dirname = function dirname(_0x3dc0dd) {
  return _0x1f331b.dirname(global.__filename(_0x3dc0dd, true));
};
global.__require = function require(_0x48c73f = import.meta.url) {
  return createRequire(_0x48c73f);
};
import * as _0x4d150d from 'ws';
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';
import _0x4b1fe1 from 'yargs';
import 'child_process';
import _0x458f6b from 'lodash';
import _0xad56e4 from 'syntax-error';
import { tmpdir } from 'os';
import _0x59683f from 'pino';
import 'pino';
import 'pino-pretty';
import 'node-cache';
import { format } from 'util';
import { makeWaSocket, protoType, serialize } from './lib/simple.js';
import { Low } from 'lowdb';
import _0x531bf3 from './lib/store.js';
import { JSONFile } from 'lowdb/node';
const {
  proto
} = (await import("@adiwajshing/baileys"))['default'];
const {
  chain
} = _0x458f6b;
const PORT = process.env.PORT || process.env.SERVER_PORT || 0x6a79;
protoType();
serialize();
global.API = (_0x518d5a, _0x5a16a3 = '/', _0x526b54 = {}, _0x4ff658) => (_0x518d5a in global.APIs ? global.APIs[_0x518d5a] : _0x518d5a) + _0x5a16a3 + (_0x526b54 || _0x4ff658 ? '?' + new URLSearchParams(Object.entries({
  ..._0x526b54,
  ...(_0x4ff658 ? {
    [_0x4ff658]: global.APIKeys[_0x518d5a in global.APIs ? global.APIs[_0x518d5a] : _0x518d5a]
  } : {})
})) : '');
global.timestamp = {
  'start': new Date()
};
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(_0x4b1fe1(process.argv.slice(0x2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts.prefix || "‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
global.db = new Low(/https?:\/\//.test(opts.db || '') ? new cloudDBAdapter(opts.db) : new JSONFile((opts._[0x0] ? opts._[0x0] + '_' : '') + "database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x317681 => setInterval(async function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x317681(global.db.data == null ? await global.loadDatabase() : global.db.data);
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read()["catch"](console.error);
  global.db.READ = null;
  global.db.data = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'sticker': {},
    'settings': {},
    ...(global.db.data || {})
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();
global.authFile = "sessions";
const msgRetryCounterMap = _0x4d533c => {};
const {
  version
} = await fetchLatestBaileysVersion();
const connectionOptions = {
  'printQRInTerminal': true,
  'patchMessageBeforeSending': _0x913cd8 => {
    const _0x5abaad = !!(_0x913cd8.buttonsMessage || _0x913cd8.templateMessage || _0x913cd8.listMessage);
    if (_0x5abaad) {
      _0x913cd8 = {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadataVersion': 0x2,
              'deviceListMetadata': {}
            },
            ..._0x913cd8
          }
        }
      };
    }
    return _0x913cd8;
  },
  'getMessage': async _0x59c0a5 => {
    if (_0x531bf3) {
      return conn.chats[_0x59c0a5.remoteJid] && conn.chats[_0x59c0a5.remoteJid].messages[_0x59c0a5.id] ? conn.chats[_0x59c0a5.remoteJid].messages[_0x59c0a5.id].message : undefined;
    }
    return proto.Message.fromObject({});
  },
  'msgRetryCounterMap': msgRetryCounterMap,
  'logger': _0x59683f({
    'level': "silent"
  }),
  'auth': {
    'creds': state.creds,
    'keys': makeCacheableSignalKeyStore(state.keys, _0x59683f({
      'level': "silent"
    }))
  },
  'browser': ["Chrome (Jessi-md)"],
  'version': version,
  'downloadHistory': false,
  'defaultQueryTimeoutMs': undefined
};
global.conn = makeWaSocket(connectionOptions);
conn.isInit = false;
conn.logger.info("W A I T I N G\n");
if (!opts.test) {
  (await import("./server.js"))["default"](PORT);
  if (global.db) {
    setInterval(async () => {
      if (global.db.data) {
        await global.db.write()['catch'](console.error);
      }
      clearTmp();
    }, 30000);
  }
}
function clearTmp() {
  const _0x21a361 = [tmpdir(), join(__dirname, "./tmp")];
  const _0x263d33 = [];
  _0x21a361.forEach(_0x49f9a9 => readdirSync(_0x49f9a9).forEach(_0x5b1a3e => _0x263d33.push(join(_0x49f9a9, _0x5b1a3e))));
  return _0x263d33.map(_0x901c5b => {
    const _0x57051d = statSync(_0x901c5b);
    if (_0x57051d.isFile() && Date.now() - _0x57051d.mtimeMs >= 300000) {
      return unlinkSync(_0x901c5b);
    }
    return false;
  });
}
async function connectionUpdate(_0x26a0e9) {
  const {
    receivedPendingNotifications: _0x2012ff,
    connection: _0x97d290,
    lastDisconnect: _0x10e4b9,
    isOnline: _0xccc726,
    isNewLogin: _0x21ca3c
  } = _0x26a0e9;
  if (_0x21ca3c) {
    conn.isInit = true;
  }
  if (_0x97d290 == "connecting") {
    console.log(_0x42bcd5.redBright("⚡ Activating Bot, Please wait a moment..."));
  }
  if (_0x97d290 == 'open') {
    console.log(_0x42bcd5.green("✅ Connected"));
  }
  if (_0xccc726 == true) {
    console.log(_0x42bcd5.green("Active Status"));
  }
  if (_0xccc726 == false) {
    console.log(_0x42bcd5.red("Dead Status"));
  }
  if (_0x2012ff) {
    console.log(_0x42bcd5.yellow("Waiting for New Messages"));
  }
  if (_0x97d290 == "close") {
    console.log(_0x42bcd5.red("⏱️ lost connection & tried to reconnect..."));
  }
  global.timestamp.connect = new Date();
  if (_0x10e4b9 && _0x10e4b9.error && _0x10e4b9.error.output && _0x10e4b9.error.output.statusCode !== DisconnectReason.loggedOut && conn.ws.readyState !== _0x4d150d['default'].CONNECTING) {
    console.log(global.reloadHandler(true));
  }
  console.log(JSON.stringify(_0x26a0e9, null, 0x2));
  if (global.db.data == null) {
    await global.loadDatabase();
  }
}
process.on("uncaughtException", console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x16abcd) {
  try {
    const _0x1d8a65 = await import("./handler.js?update=" + Date.now())["catch"](console.error);
    if (Object.keys(_0x1d8a65 || {}).length) {
      handler = _0x1d8a65;
    }
  } catch (_0xd666ef) {
    console.error;
  }
  if (_0x16abcd) {
    const _0x44404a = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWaSocket(connectionOptions, {
      'chats': _0x44404a
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off('messages.upsert', conn.handler);
    conn.ev.off('messages.update', conn.pollUpdate);
    conn.ev.off('group-participants.update', conn.participantsUpdate);
    conn.ev.off("message.delete", conn.onDelete);
    conn.ev.off("presence.update", conn.presenceUpdate);
    conn.ev.off('connection.update', conn.connectionUpdate);
    conn.ev.off('creds.update', conn.credsUpdate);
  }
  conn.welcome = "Hai, @user!\nWelcome to @subject\n\n@desc";
  conn.bye = "GOOD BYE @user!";
  conn.spromote = "@user now admin!";
  conn.sdemote = "@user now not admin!";
  conn.handler = handler.handler.bind(global.conn);
  conn.pollUpdate = handler.pollUpdate.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.presenceUpdate = handler.presenceUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn);
  const _0x107af0 = new Date();
  const _0x3c349b = new Date(conn.ev);
  if (_0x107af0 >= _0x3c349b) {} else {}
  conn.ev.on("messages.upsert", conn.handler);
  conn.ev.on('messages.update', conn.pollUpdate);
  conn.ev.on('group-participants.update', conn.participantsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on("presence.update", conn.presenceUpdate);
  conn.ev.on("connection.update", conn.connectionUpdate);
  conn.ev.on("creds.update", conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, './plugins/index'));
const pluginFilter = _0x2b3230 => /\.js$/.test(_0x2b3230);
global.plugins = {};
async function filesInit() {
  for (const _0xd71f93 of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      const _0x7c5d82 = global.__filename(join(pluginFolder, _0xd71f93));
      const _0x3cfe36 = await import(_0x7c5d82);
      global.plugins[_0xd71f93] = _0x3cfe36["default"] || _0x3cfe36;
    } catch (_0x3deba2) {
      conn.logger.error(_0x3deba2);
      delete global.plugins[_0xd71f93];
    }
  }
}
filesInit().then(_0x2a433a => Object.keys(global.plugins))["catch"](console.error);
global.reload = async (_0x54eba5, _0x444eef) => {
  if (/\.js$/.test(_0x444eef)) {
    const _0x425a30 = global.__filename(join(pluginFolder, _0x444eef), true);
    if (_0x444eef in global.plugins) {
      if (existsSync(_0x425a30)) {
        conn.logger.info(" updated plugin - '" + _0x444eef + "'");
      } else {
        conn.logger.warn("deleted plugin - '" + _0x444eef + "'");
        return delete global.plugins[_0x444eef];
      }
    } else {
      conn.logger.info("new plugin - '" + _0x444eef + "'");
    }
    const _0x343cbe = _0xad56e4(readFileSync(_0x425a30), _0x444eef, {
      'sourceType': "module",
      'allowAwaitOutsideFunction': true
    });
    if (_0x343cbe) {
      conn.logger.error("syntax error while loading '" + _0x444eef + "'\n" + format(_0x343cbe));
    } else {
      try {
        const _0x22a260 = await import(global.__filename(_0x425a30) + "?update=" + Date.now());
        global.plugins[_0x444eef] = _0x22a260["default"] || _0x22a260;
      } catch (_0x434389) {
        conn.logger.error("error require plugin '" + _0x444eef + "\n" + format(_0x434389) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x88aa0e], [_0x1ea821]) => _0x88aa0e.localeCompare(_0x1ea821)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  Object.freeze(global.support);
}
function clockString(_0x20f894) {
  const _0x4e7661 = isNaN(_0x20f894) ? '--' : Math.floor(_0x20f894 / 0x5265c00);
  const _0x3cdd82 = isNaN(_0x20f894) ? '--' : Math.floor(_0x20f894 / 0x36ee80) % 0x18;
  const _0x3baa69 = isNaN(_0x20f894) ? '--' : Math.floor(_0x20f894 / 0xea60) % 0x3c;
  const _0x583155 = isNaN(_0x20f894) ? '--' : Math.floor(_0x20f894 / 0x3e8) % 0x3c;
  return [_0x4e7661, " Day ", _0x3cdd82, " hours ", _0x3baa69, " Minutes ", _0x583155, " Second "].map(_0x321081 => _0x321081.toString().padStart(0x2, '0')).join('');
}
_quickTest()["catch"](console.error);
