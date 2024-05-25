// Common aliases
var $Reader = protobuf.Reader, $Writer = protobuf.Writer, $util = protobuf.util;

// Exported root namespace
var $root = protobuf.roots.creator || (protobuf.roots.creator = $util.global);

$root.MessageType = (function() {

    /**
     * Namespace MessageType.
     * @exports MessageType
     * @namespace
     */
    var MessageType = {};

    /**
     * MessageMainType enum.
     * @name MessageType.MessageMainType
     * @enum {number}
     * @property {number} MSG_UnKnow=0 MSG_UnKnow value
     * @property {number} TypeHeart=1000 TypeHeart value
     * @property {number} TypeBroadcast=1001 TypeBroadcast value
     * @property {number} TypeC2c=1002 TypeC2c value
     * @property {number} TypeKick=1003 TypeKick value
     * @property {number} TypeBalance=1004 TypeBalance value
     * @property {number} TypeTexas=1008 TypeTexas value
     * @property {number} TypeShort=1010 TypeShort value
     */
    MessageType.MessageMainType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MSG_UnKnow"] = 0;
        values[valuesById[1000] = "TypeHeart"] = 1000;
        values[valuesById[1001] = "TypeBroadcast"] = 1001;
        values[valuesById[1002] = "TypeC2c"] = 1002;
        values[valuesById[1003] = "TypeKick"] = 1003;
        values[valuesById[1004] = "TypeBalance"] = 1004;
        values[valuesById[1008] = "TypeTexas"] = 1008;
        values[valuesById[1010] = "TypeShort"] = 1010;
        return values;
    })();

    /**
     * MessageSubType enum.
     * @name MessageType.MessageSubType
     * @enum {number}
     * @property {number} MSG_UnKnow=0 MSG_UnKnow value
     * @property {number} GetGameScene=201 GetGameScene value
     * @property {number} UserSitDown=202 UserSitDown value
     * @property {number} UserStandUp=203 UserStandUp value
     * @property {number} UserTransferIn=204 UserTransferIn value
     * @property {number} UserTransferOut=205 UserTransferOut value
     * @property {number} UserFold=206 UserFold value
     * @property {number} UserBet=207 UserBet value
     * @property {number} UserCall=208 UserCall value
     * @property {number} UserRaise=209 UserRaise value
     * @property {number} UserAllIn=210 UserAllIn value
     * @property {number} UserCheck=211 UserCheck value
     * @property {number} JoinTable=212 JoinTable value
     * @property {number} LeaveTable=213 LeaveTable value
     * @property {number} RecordList=214 RecordList value
     * @property {number} RecordDetails=215 RecordDetails value
     * @property {number} EmojiChat=216 EmojiChat value
     * @property {number} TextChat=217 TextChat value
     * @property {number} NtcGetGameScene=401 NtcGetGameScene value
     * @property {number} NtcUserSitDown=402 NtcUserSitDown value
     * @property {number} NtcUserStandUp=403 NtcUserStandUp value
     * @property {number} NtcUserTransferIn=404 NtcUserTransferIn value
     * @property {number} NtcUserTransferOut=405 NtcUserTransferOut value
     * @property {number} NtcUserFold=406 NtcUserFold value
     * @property {number} NtcUserBet=407 NtcUserBet value
     * @property {number} NtcUserCall=408 NtcUserCall value
     * @property {number} NtcUserRaise=409 NtcUserRaise value
     * @property {number} NtcUserAllIn=410 NtcUserAllIn value
     * @property {number} NtcUserCheck=411 NtcUserCheck value
     * @property {number} NtcJoinTable=412 NtcJoinTable value
     * @property {number} NtcLeaveTable=413 NtcLeaveTable value
     * @property {number} NtcAssetsChange=414 NtcAssetsChange value
     * @property {number} NtcCountdown=415 NtcCountdown value
     * @property {number} NtcGameStart=416 NtcGameStart value
     * @property {number} NtcRoundStart=417 NtcRoundStart value
     * @property {number} NtcTurnStart=418 NtcTurnStart value
     * @property {number} NtcUserAction=419 NtcUserAction value
     * @property {number} NtcHoleCards=420 NtcHoleCards value
     * @property {number} NtcUserHoleCards=421 NtcUserHoleCards value
     * @property {number} NtcCommunityCard=422 NtcCommunityCard value
     * @property {number} NtcGameEnd=423 NtcGameEnd value
     * @property {number} NtcPotInfo=424 NtcPotInfo value
     * @property {number} NtcEmojiChat=425 NtcEmojiChat value
     * @property {number} NtcTextChat=426 NtcTextChat value
     */
    MessageType.MessageSubType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MSG_UnKnow"] = 0;
        values[valuesById[201] = "GetGameScene"] = 201;
        values[valuesById[202] = "UserSitDown"] = 202;
        values[valuesById[203] = "UserStandUp"] = 203;
        values[valuesById[204] = "UserTransferIn"] = 204;
        values[valuesById[205] = "UserTransferOut"] = 205;
        values[valuesById[206] = "UserFold"] = 206;
        values[valuesById[207] = "UserBet"] = 207;
        values[valuesById[208] = "UserCall"] = 208;
        values[valuesById[209] = "UserRaise"] = 209;
        values[valuesById[210] = "UserAllIn"] = 210;
        values[valuesById[211] = "UserCheck"] = 211;
        values[valuesById[212] = "JoinTable"] = 212;
        values[valuesById[213] = "LeaveTable"] = 213;
        values[valuesById[214] = "RecordList"] = 214;
        values[valuesById[215] = "RecordDetails"] = 215;
        values[valuesById[216] = "EmojiChat"] = 216;
        values[valuesById[217] = "TextChat"] = 217;
        values[valuesById[401] = "NtcGetGameScene"] = 401;
        values[valuesById[402] = "NtcUserSitDown"] = 402;
        values[valuesById[403] = "NtcUserStandUp"] = 403;
        values[valuesById[404] = "NtcUserTransferIn"] = 404;
        values[valuesById[405] = "NtcUserTransferOut"] = 405;
        values[valuesById[406] = "NtcUserFold"] = 406;
        values[valuesById[407] = "NtcUserBet"] = 407;
        values[valuesById[408] = "NtcUserCall"] = 408;
        values[valuesById[409] = "NtcUserRaise"] = 409;
        values[valuesById[410] = "NtcUserAllIn"] = 410;
        values[valuesById[411] = "NtcUserCheck"] = 411;
        values[valuesById[412] = "NtcJoinTable"] = 412;
        values[valuesById[413] = "NtcLeaveTable"] = 413;
        values[valuesById[414] = "NtcAssetsChange"] = 414;
        values[valuesById[415] = "NtcCountdown"] = 415;
        values[valuesById[416] = "NtcGameStart"] = 416;
        values[valuesById[417] = "NtcRoundStart"] = 417;
        values[valuesById[418] = "NtcTurnStart"] = 418;
        values[valuesById[419] = "NtcUserAction"] = 419;
        values[valuesById[420] = "NtcHoleCards"] = 420;
        values[valuesById[421] = "NtcUserHoleCards"] = 421;
        values[valuesById[422] = "NtcCommunityCard"] = 422;
        values[valuesById[423] = "NtcGameEnd"] = 423;
        values[valuesById[424] = "NtcPotInfo"] = 424;
        values[valuesById[425] = "NtcEmojiChat"] = 425;
        values[valuesById[426] = "NtcTextChat"] = 426;
        return values;
    })();

    return MessageType;
})();

$root.msg = (function() {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    var msg = {};

    msg.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof msg
         * @interface IMessage
         * @property {number|null} [MsgId] Message MsgId
         * @property {number|null} [Type] Message Type
         * @property {number|null} [MsgType] Message MsgType
         * @property {string|null} [From] Message From
         * @property {string|null} [To] Message To
         * @property {number|null} [Ope] Message Ope
         * @property {string|null} [Title] Message Title
         * @property {Uint8Array|null} [Body] Message Body
         * @property {number|null} [Timestamp] Message Timestamp
         * @property {number|null} [MarkRead] Message MarkRead
         * @property {number|null} [Device] Message Device
         * @property {string|null} [Ext] Message Ext
         */

        /**
         * Constructs a new Message.
         * @memberof msg
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {msg.IMessage=} [p] Properties to set
         */
        function Message(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Message MsgId.
         * @member {number} MsgId
         * @memberof msg.Message
         * @instance
         */
        Message.prototype.MsgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message Type.
         * @member {number} Type
         * @memberof msg.Message
         * @instance
         */
        Message.prototype.Type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message MsgType.
         * @member {number} MsgType
         * @memberof msg.Message
         * @instance
         */
        Message.prototype.MsgType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message From.
         * @member {string} From
         * @memberof msg.Message
         * @instance
         */
        Message.prototype.From = "";

        /**
         * Message To.
         * @member {string} To
         * @memberof msg.Message
         * @instance
         */
        Message.prototype.To = "";

        /**
         * Message Ope.
         * @member {number} Ope
         * @memberof msg.Message
         * @instance
         */
        Message.prototype.Ope = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message Title.
         * @member {string} Title
         * @memberof msg.Message
         * @instance
         */
        Message.prototype.Title = "";

        /**
         * Message Body.
         * @member {Uint8Array} Body
         * @memberof msg.Message
         * @instance
         */
        Message.prototype.Body = $util.newBuffer([]);

        /**
         * Message Timestamp.
         * @member {number} Timestamp
         * @memberof msg.Message
         * @instance
         */
        Message.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message MarkRead.
         * @member {number} MarkRead
         * @memberof msg.Message
         * @instance
         */
        Message.prototype.MarkRead = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message Device.
         * @member {number} Device
         * @memberof msg.Message
         * @instance
         */
        Message.prototype.Device = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message Ext.
         * @member {string} Ext
         * @memberof msg.Message
         * @instance
         */
        Message.prototype.Ext = "";

        /**
         * Encodes the specified Message message. Does not implicitly {@link msg.Message.verify|verify} messages.
         * @function encode
         * @memberof msg.Message
         * @static
         * @param {msg.IMessage} m Message message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        Message.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.MsgId != null && Object.hasOwnProperty.call(m, "MsgId"))
                w.uint32(8).int64(m.MsgId);
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(16).int64(m.Type);
            if (m.MsgType != null && Object.hasOwnProperty.call(m, "MsgType"))
                w.uint32(24).int64(m.MsgType);
            if (m.From != null && Object.hasOwnProperty.call(m, "From"))
                w.uint32(34).string(m.From);
            if (m.To != null && Object.hasOwnProperty.call(m, "To"))
                w.uint32(42).string(m.To);
            if (m.Ope != null && Object.hasOwnProperty.call(m, "Ope"))
                w.uint32(48).int64(m.Ope);
            if (m.Title != null && Object.hasOwnProperty.call(m, "Title"))
                w.uint32(58).string(m.Title);
            if (m.Body != null && Object.hasOwnProperty.call(m, "Body"))
                w.uint32(66).bytes(m.Body);
            if (m.Timestamp != null && Object.hasOwnProperty.call(m, "Timestamp"))
                w.uint32(72).int64(m.Timestamp);
            if (m.MarkRead != null && Object.hasOwnProperty.call(m, "MarkRead"))
                w.uint32(80).int64(m.MarkRead);
            if (m.Device != null && Object.hasOwnProperty.call(m, "Device"))
                w.uint32(88).int64(m.Device);
            if (m.Ext != null && Object.hasOwnProperty.call(m, "Ext"))
                w.uint32(98).string(m.Ext);
            return w;
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Message
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {msg.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.msg.Message();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.MsgId = r.int64();
                    break;
                case 2:
                    m.Type = r.int64();
                    break;
                case 3:
                    m.MsgType = r.int64();
                    break;
                case 4:
                    m.From = r.string();
                    break;
                case 5:
                    m.To = r.string();
                    break;
                case 6:
                    m.Ope = r.int64();
                    break;
                case 7:
                    m.Title = r.string();
                    break;
                case 8:
                    m.Body = r.bytes();
                    break;
                case 9:
                    m.Timestamp = r.int64();
                    break;
                case 10:
                    m.MarkRead = r.int64();
                    break;
                case 11:
                    m.Device = r.int64();
                    break;
                case 12:
                    m.Ext = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Message;
    })();

    return msg;
})();

$root.game = (function() {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    var game = {};

    game.GetGameSceneReq = (function() {

        /**
         * Properties of a GetGameSceneReq.
         * @memberof game
         * @interface IGetGameSceneReq
         * @property {number|null} [RoomID] GetGameSceneReq RoomID
         * @property {number|null} [TableID] GetGameSceneReq TableID
         */

        /**
         * Constructs a new GetGameSceneReq.
         * @memberof game
         * @classdesc Represents a GetGameSceneReq.
         * @implements IGetGameSceneReq
         * @constructor
         * @param {game.IGetGameSceneReq=} [p] Properties to set
         */
        function GetGameSceneReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GetGameSceneReq RoomID.
         * @member {number} RoomID
         * @memberof game.GetGameSceneReq
         * @instance
         */
        GetGameSceneReq.prototype.RoomID = 0;

        /**
         * GetGameSceneReq TableID.
         * @member {number} TableID
         * @memberof game.GetGameSceneReq
         * @instance
         */
        GetGameSceneReq.prototype.TableID = 0;

        /**
         * Encodes the specified GetGameSceneReq message. Does not implicitly {@link game.GetGameSceneReq.verify|verify} messages.
         * @function encode
         * @memberof game.GetGameSceneReq
         * @static
         * @param {game.IGetGameSceneReq} m GetGameSceneReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GetGameSceneReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a GetGameSceneReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.GetGameSceneReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.GetGameSceneReq} GetGameSceneReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameSceneReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.GetGameSceneReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetGameSceneReq;
    })();

    game.GetGameSceneResp = (function() {

        /**
         * Properties of a GetGameSceneResp.
         * @memberof game
         * @interface IGetGameSceneResp
         * @property {game.ReturnCode|null} [Code] GetGameSceneResp Code
         * @property {string|null} [Msg] GetGameSceneResp Msg
         */

        /**
         * Constructs a new GetGameSceneResp.
         * @memberof game
         * @classdesc Represents a GetGameSceneResp.
         * @implements IGetGameSceneResp
         * @constructor
         * @param {game.IGetGameSceneResp=} [p] Properties to set
         */
        function GetGameSceneResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GetGameSceneResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.GetGameSceneResp
         * @instance
         */
        GetGameSceneResp.prototype.Code = 0;

        /**
         * GetGameSceneResp Msg.
         * @member {string} Msg
         * @memberof game.GetGameSceneResp
         * @instance
         */
        GetGameSceneResp.prototype.Msg = "";

        /**
         * Encodes the specified GetGameSceneResp message. Does not implicitly {@link game.GetGameSceneResp.verify|verify} messages.
         * @function encode
         * @memberof game.GetGameSceneResp
         * @static
         * @param {game.IGetGameSceneResp} m GetGameSceneResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GetGameSceneResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        /**
         * Decodes a GetGameSceneResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.GetGameSceneResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.GetGameSceneResp} GetGameSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameSceneResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.GetGameSceneResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetGameSceneResp;
    })();

    game.JoinTableReq = (function() {

        /**
         * Properties of a JoinTableReq.
         * @memberof game
         * @interface IJoinTableReq
         * @property {number|null} [RoomID] JoinTableReq RoomID
         * @property {number|null} [TableID] JoinTableReq TableID
         */

        /**
         * Constructs a new JoinTableReq.
         * @memberof game
         * @classdesc Represents a JoinTableReq.
         * @implements IJoinTableReq
         * @constructor
         * @param {game.IJoinTableReq=} [p] Properties to set
         */
        function JoinTableReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * JoinTableReq RoomID.
         * @member {number} RoomID
         * @memberof game.JoinTableReq
         * @instance
         */
        JoinTableReq.prototype.RoomID = 0;

        /**
         * JoinTableReq TableID.
         * @member {number} TableID
         * @memberof game.JoinTableReq
         * @instance
         */
        JoinTableReq.prototype.TableID = 0;

        /**
         * Encodes the specified JoinTableReq message. Does not implicitly {@link game.JoinTableReq.verify|verify} messages.
         * @function encode
         * @memberof game.JoinTableReq
         * @static
         * @param {game.IJoinTableReq} m JoinTableReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        JoinTableReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a JoinTableReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.JoinTableReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.JoinTableReq} JoinTableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.JoinTableReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return JoinTableReq;
    })();

    game.JoinTableResp = (function() {

        /**
         * Properties of a JoinTableResp.
         * @memberof game
         * @interface IJoinTableResp
         * @property {game.ReturnCode|null} [Code] JoinTableResp Code
         * @property {string|null} [Msg] JoinTableResp Msg
         */

        /**
         * Constructs a new JoinTableResp.
         * @memberof game
         * @classdesc Represents a JoinTableResp.
         * @implements IJoinTableResp
         * @constructor
         * @param {game.IJoinTableResp=} [p] Properties to set
         */
        function JoinTableResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * JoinTableResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.JoinTableResp
         * @instance
         */
        JoinTableResp.prototype.Code = 0;

        /**
         * JoinTableResp Msg.
         * @member {string} Msg
         * @memberof game.JoinTableResp
         * @instance
         */
        JoinTableResp.prototype.Msg = "";

        /**
         * Encodes the specified JoinTableResp message. Does not implicitly {@link game.JoinTableResp.verify|verify} messages.
         * @function encode
         * @memberof game.JoinTableResp
         * @static
         * @param {game.IJoinTableResp} m JoinTableResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        JoinTableResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        /**
         * Decodes a JoinTableResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.JoinTableResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.JoinTableResp} JoinTableResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.JoinTableResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return JoinTableResp;
    })();

    game.LeaveTableReq = (function() {

        /**
         * Properties of a LeaveTableReq.
         * @memberof game
         * @interface ILeaveTableReq
         * @property {number|null} [RoomID] LeaveTableReq RoomID
         * @property {number|null} [TableID] LeaveTableReq TableID
         */

        /**
         * Constructs a new LeaveTableReq.
         * @memberof game
         * @classdesc Represents a LeaveTableReq.
         * @implements ILeaveTableReq
         * @constructor
         * @param {game.ILeaveTableReq=} [p] Properties to set
         */
        function LeaveTableReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LeaveTableReq RoomID.
         * @member {number} RoomID
         * @memberof game.LeaveTableReq
         * @instance
         */
        LeaveTableReq.prototype.RoomID = 0;

        /**
         * LeaveTableReq TableID.
         * @member {number} TableID
         * @memberof game.LeaveTableReq
         * @instance
         */
        LeaveTableReq.prototype.TableID = 0;

        /**
         * Encodes the specified LeaveTableReq message. Does not implicitly {@link game.LeaveTableReq.verify|verify} messages.
         * @function encode
         * @memberof game.LeaveTableReq
         * @static
         * @param {game.ILeaveTableReq} m LeaveTableReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        LeaveTableReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a LeaveTableReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.LeaveTableReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.LeaveTableReq} LeaveTableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveTableReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.LeaveTableReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LeaveTableReq;
    })();

    game.LeaveTableResp = (function() {

        /**
         * Properties of a LeaveTableResp.
         * @memberof game
         * @interface ILeaveTableResp
         * @property {game.ReturnCode|null} [Code] LeaveTableResp Code
         * @property {string|null} [Msg] LeaveTableResp Msg
         */

        /**
         * Constructs a new LeaveTableResp.
         * @memberof game
         * @classdesc Represents a LeaveTableResp.
         * @implements ILeaveTableResp
         * @constructor
         * @param {game.ILeaveTableResp=} [p] Properties to set
         */
        function LeaveTableResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LeaveTableResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.LeaveTableResp
         * @instance
         */
        LeaveTableResp.prototype.Code = 0;

        /**
         * LeaveTableResp Msg.
         * @member {string} Msg
         * @memberof game.LeaveTableResp
         * @instance
         */
        LeaveTableResp.prototype.Msg = "";

        /**
         * Encodes the specified LeaveTableResp message. Does not implicitly {@link game.LeaveTableResp.verify|verify} messages.
         * @function encode
         * @memberof game.LeaveTableResp
         * @static
         * @param {game.ILeaveTableResp} m LeaveTableResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        LeaveTableResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        /**
         * Decodes a LeaveTableResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.LeaveTableResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.LeaveTableResp} LeaveTableResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveTableResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.LeaveTableResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LeaveTableResp;
    })();

    game.UserSitDownReq = (function() {

        /**
         * Properties of a UserSitDownReq.
         * @memberof game
         * @interface IUserSitDownReq
         * @property {number|null} [RoomID] UserSitDownReq RoomID
         * @property {number|null} [TableID] UserSitDownReq TableID
         * @property {number|null} [ChairID] UserSitDownReq ChairID
         */

        /**
         * Constructs a new UserSitDownReq.
         * @memberof game
         * @classdesc Represents a UserSitDownReq.
         * @implements IUserSitDownReq
         * @constructor
         * @param {game.IUserSitDownReq=} [p] Properties to set
         */
        function UserSitDownReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserSitDownReq RoomID.
         * @member {number} RoomID
         * @memberof game.UserSitDownReq
         * @instance
         */
        UserSitDownReq.prototype.RoomID = 0;

        /**
         * UserSitDownReq TableID.
         * @member {number} TableID
         * @memberof game.UserSitDownReq
         * @instance
         */
        UserSitDownReq.prototype.TableID = 0;

        /**
         * UserSitDownReq ChairID.
         * @member {number} ChairID
         * @memberof game.UserSitDownReq
         * @instance
         */
        UserSitDownReq.prototype.ChairID = 0;

        /**
         * Encodes the specified UserSitDownReq message. Does not implicitly {@link game.UserSitDownReq.verify|verify} messages.
         * @function encode
         * @memberof game.UserSitDownReq
         * @static
         * @param {game.IUserSitDownReq} m UserSitDownReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserSitDownReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            if (m.ChairID != null && Object.hasOwnProperty.call(m, "ChairID"))
                w.uint32(24).int32(m.ChairID);
            return w;
        };

        /**
         * Decodes a UserSitDownReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserSitDownReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserSitDownReq} UserSitDownReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserSitDownReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserSitDownReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                case 3:
                    m.ChairID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserSitDownReq;
    })();

    game.UserSitDownResp = (function() {

        /**
         * Properties of a UserSitDownResp.
         * @memberof game
         * @interface IUserSitDownResp
         * @property {game.ReturnCode|null} [Code] UserSitDownResp Code
         * @property {string|null} [Msg] UserSitDownResp Msg
         */

        /**
         * Constructs a new UserSitDownResp.
         * @memberof game
         * @classdesc Represents a UserSitDownResp.
         * @implements IUserSitDownResp
         * @constructor
         * @param {game.IUserSitDownResp=} [p] Properties to set
         */
        function UserSitDownResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserSitDownResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserSitDownResp
         * @instance
         */
        UserSitDownResp.prototype.Code = 0;

        /**
         * UserSitDownResp Msg.
         * @member {string} Msg
         * @memberof game.UserSitDownResp
         * @instance
         */
        UserSitDownResp.prototype.Msg = "";

        /**
         * Encodes the specified UserSitDownResp message. Does not implicitly {@link game.UserSitDownResp.verify|verify} messages.
         * @function encode
         * @memberof game.UserSitDownResp
         * @static
         * @param {game.IUserSitDownResp} m UserSitDownResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserSitDownResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        /**
         * Decodes a UserSitDownResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserSitDownResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserSitDownResp} UserSitDownResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserSitDownResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserSitDownResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserSitDownResp;
    })();

    game.UserStandUpReq = (function() {

        /**
         * Properties of a UserStandUpReq.
         * @memberof game
         * @interface IUserStandUpReq
         * @property {number|null} [RoomID] UserStandUpReq RoomID
         * @property {number|null} [TableID] UserStandUpReq TableID
         * @property {number|null} [ChairID] UserStandUpReq ChairID
         */

        /**
         * Constructs a new UserStandUpReq.
         * @memberof game
         * @classdesc Represents a UserStandUpReq.
         * @implements IUserStandUpReq
         * @constructor
         * @param {game.IUserStandUpReq=} [p] Properties to set
         */
        function UserStandUpReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserStandUpReq RoomID.
         * @member {number} RoomID
         * @memberof game.UserStandUpReq
         * @instance
         */
        UserStandUpReq.prototype.RoomID = 0;

        /**
         * UserStandUpReq TableID.
         * @member {number} TableID
         * @memberof game.UserStandUpReq
         * @instance
         */
        UserStandUpReq.prototype.TableID = 0;

        /**
         * UserStandUpReq ChairID.
         * @member {number} ChairID
         * @memberof game.UserStandUpReq
         * @instance
         */
        UserStandUpReq.prototype.ChairID = 0;

        /**
         * Encodes the specified UserStandUpReq message. Does not implicitly {@link game.UserStandUpReq.verify|verify} messages.
         * @function encode
         * @memberof game.UserStandUpReq
         * @static
         * @param {game.IUserStandUpReq} m UserStandUpReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserStandUpReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            if (m.ChairID != null && Object.hasOwnProperty.call(m, "ChairID"))
                w.uint32(24).int32(m.ChairID);
            return w;
        };

        /**
         * Decodes a UserStandUpReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserStandUpReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserStandUpReq} UserStandUpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserStandUpReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserStandUpReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                case 3:
                    m.ChairID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserStandUpReq;
    })();

    game.UserStandUpResp = (function() {

        /**
         * Properties of a UserStandUpResp.
         * @memberof game
         * @interface IUserStandUpResp
         * @property {game.ReturnCode|null} [Code] UserStandUpResp Code
         * @property {string|null} [Msg] UserStandUpResp Msg
         */

        /**
         * Constructs a new UserStandUpResp.
         * @memberof game
         * @classdesc Represents a UserStandUpResp.
         * @implements IUserStandUpResp
         * @constructor
         * @param {game.IUserStandUpResp=} [p] Properties to set
         */
        function UserStandUpResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserStandUpResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserStandUpResp
         * @instance
         */
        UserStandUpResp.prototype.Code = 0;

        /**
         * UserStandUpResp Msg.
         * @member {string} Msg
         * @memberof game.UserStandUpResp
         * @instance
         */
        UserStandUpResp.prototype.Msg = "";

        /**
         * Encodes the specified UserStandUpResp message. Does not implicitly {@link game.UserStandUpResp.verify|verify} messages.
         * @function encode
         * @memberof game.UserStandUpResp
         * @static
         * @param {game.IUserStandUpResp} m UserStandUpResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserStandUpResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        /**
         * Decodes a UserStandUpResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserStandUpResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserStandUpResp} UserStandUpResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserStandUpResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserStandUpResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserStandUpResp;
    })();

    game.UserTransferInReq = (function() {

        /**
         * Properties of a UserTransferInReq.
         * @memberof game
         * @interface IUserTransferInReq
         * @property {number|null} [Amount] UserTransferInReq Amount
         * @property {number|null} [RoomID] UserTransferInReq RoomID
         * @property {number|null} [TableID] UserTransferInReq TableID
         */

        /**
         * Constructs a new UserTransferInReq.
         * @memberof game
         * @classdesc Represents a UserTransferInReq.
         * @implements IUserTransferInReq
         * @constructor
         * @param {game.IUserTransferInReq=} [p] Properties to set
         */
        function UserTransferInReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserTransferInReq Amount.
         * @member {number} Amount
         * @memberof game.UserTransferInReq
         * @instance
         */
        UserTransferInReq.prototype.Amount = 0;

        /**
         * UserTransferInReq RoomID.
         * @member {number} RoomID
         * @memberof game.UserTransferInReq
         * @instance
         */
        UserTransferInReq.prototype.RoomID = 0;

        /**
         * UserTransferInReq TableID.
         * @member {number} TableID
         * @memberof game.UserTransferInReq
         * @instance
         */
        UserTransferInReq.prototype.TableID = 0;

        /**
         * Encodes the specified UserTransferInReq message. Does not implicitly {@link game.UserTransferInReq.verify|verify} messages.
         * @function encode
         * @memberof game.UserTransferInReq
         * @static
         * @param {game.IUserTransferInReq} m UserTransferInReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserTransferInReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(9).double(m.Amount);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(16).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(24).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserTransferInReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserTransferInReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserTransferInReq} UserTransferInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserTransferInReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserTransferInReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Amount = r.double();
                    break;
                case 2:
                    m.RoomID = r.int32();
                    break;
                case 3:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserTransferInReq;
    })();

    game.UserTransferInResp = (function() {

        /**
         * Properties of a UserTransferInResp.
         * @memberof game
         * @interface IUserTransferInResp
         * @property {game.ReturnCode|null} [Code] UserTransferInResp Code
         * @property {string|null} [Msg] UserTransferInResp Msg
         */

        /**
         * Constructs a new UserTransferInResp.
         * @memberof game
         * @classdesc Represents a UserTransferInResp.
         * @implements IUserTransferInResp
         * @constructor
         * @param {game.IUserTransferInResp=} [p] Properties to set
         */
        function UserTransferInResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserTransferInResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserTransferInResp
         * @instance
         */
        UserTransferInResp.prototype.Code = 0;

        /**
         * UserTransferInResp Msg.
         * @member {string} Msg
         * @memberof game.UserTransferInResp
         * @instance
         */
        UserTransferInResp.prototype.Msg = "";

        /**
         * Encodes the specified UserTransferInResp message. Does not implicitly {@link game.UserTransferInResp.verify|verify} messages.
         * @function encode
         * @memberof game.UserTransferInResp
         * @static
         * @param {game.IUserTransferInResp} m UserTransferInResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserTransferInResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        /**
         * Decodes a UserTransferInResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserTransferInResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserTransferInResp} UserTransferInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserTransferInResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserTransferInResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserTransferInResp;
    })();

    game.UserTransferOutReq = (function() {

        /**
         * Properties of a UserTransferOutReq.
         * @memberof game
         * @interface IUserTransferOutReq
         * @property {number|null} [Amount] UserTransferOutReq Amount
         * @property {number|null} [RoomID] UserTransferOutReq RoomID
         * @property {number|null} [TableID] UserTransferOutReq TableID
         */

        /**
         * Constructs a new UserTransferOutReq.
         * @memberof game
         * @classdesc Represents a UserTransferOutReq.
         * @implements IUserTransferOutReq
         * @constructor
         * @param {game.IUserTransferOutReq=} [p] Properties to set
         */
        function UserTransferOutReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserTransferOutReq Amount.
         * @member {number} Amount
         * @memberof game.UserTransferOutReq
         * @instance
         */
        UserTransferOutReq.prototype.Amount = 0;

        /**
         * UserTransferOutReq RoomID.
         * @member {number} RoomID
         * @memberof game.UserTransferOutReq
         * @instance
         */
        UserTransferOutReq.prototype.RoomID = 0;

        /**
         * UserTransferOutReq TableID.
         * @member {number} TableID
         * @memberof game.UserTransferOutReq
         * @instance
         */
        UserTransferOutReq.prototype.TableID = 0;

        /**
         * Encodes the specified UserTransferOutReq message. Does not implicitly {@link game.UserTransferOutReq.verify|verify} messages.
         * @function encode
         * @memberof game.UserTransferOutReq
         * @static
         * @param {game.IUserTransferOutReq} m UserTransferOutReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserTransferOutReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(9).double(m.Amount);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(16).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(24).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserTransferOutReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserTransferOutReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserTransferOutReq} UserTransferOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserTransferOutReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserTransferOutReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Amount = r.double();
                    break;
                case 2:
                    m.RoomID = r.int32();
                    break;
                case 3:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserTransferOutReq;
    })();

    game.UserTransferOutResp = (function() {

        /**
         * Properties of a UserTransferOutResp.
         * @memberof game
         * @interface IUserTransferOutResp
         * @property {game.ReturnCode|null} [Code] UserTransferOutResp Code
         * @property {string|null} [Msg] UserTransferOutResp Msg
         */

        /**
         * Constructs a new UserTransferOutResp.
         * @memberof game
         * @classdesc Represents a UserTransferOutResp.
         * @implements IUserTransferOutResp
         * @constructor
         * @param {game.IUserTransferOutResp=} [p] Properties to set
         */
        function UserTransferOutResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserTransferOutResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserTransferOutResp
         * @instance
         */
        UserTransferOutResp.prototype.Code = 0;

        /**
         * UserTransferOutResp Msg.
         * @member {string} Msg
         * @memberof game.UserTransferOutResp
         * @instance
         */
        UserTransferOutResp.prototype.Msg = "";

        /**
         * Encodes the specified UserTransferOutResp message. Does not implicitly {@link game.UserTransferOutResp.verify|verify} messages.
         * @function encode
         * @memberof game.UserTransferOutResp
         * @static
         * @param {game.IUserTransferOutResp} m UserTransferOutResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserTransferOutResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        /**
         * Decodes a UserTransferOutResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserTransferOutResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserTransferOutResp} UserTransferOutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserTransferOutResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserTransferOutResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserTransferOutResp;
    })();

    game.UserFoldReq = (function() {

        /**
         * Properties of a UserFoldReq.
         * @memberof game
         * @interface IUserFoldReq
         * @property {number|null} [StepNumber] UserFoldReq StepNumber
         * @property {number|null} [RoomID] UserFoldReq RoomID
         * @property {number|null} [TableID] UserFoldReq TableID
         */

        /**
         * Constructs a new UserFoldReq.
         * @memberof game
         * @classdesc Represents a UserFoldReq.
         * @implements IUserFoldReq
         * @constructor
         * @param {game.IUserFoldReq=} [p] Properties to set
         */
        function UserFoldReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserFoldReq StepNumber.
         * @member {number} StepNumber
         * @memberof game.UserFoldReq
         * @instance
         */
        UserFoldReq.prototype.StepNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserFoldReq RoomID.
         * @member {number} RoomID
         * @memberof game.UserFoldReq
         * @instance
         */
        UserFoldReq.prototype.RoomID = 0;

        /**
         * UserFoldReq TableID.
         * @member {number} TableID
         * @memberof game.UserFoldReq
         * @instance
         */
        UserFoldReq.prototype.TableID = 0;

        /**
         * Encodes the specified UserFoldReq message. Does not implicitly {@link game.UserFoldReq.verify|verify} messages.
         * @function encode
         * @memberof game.UserFoldReq
         * @static
         * @param {game.IUserFoldReq} m UserFoldReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserFoldReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.StepNumber != null && Object.hasOwnProperty.call(m, "StepNumber"))
                w.uint32(8).int64(m.StepNumber);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(16).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(24).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserFoldReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserFoldReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserFoldReq} UserFoldReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserFoldReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserFoldReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.StepNumber = r.int64();
                    break;
                case 2:
                    m.RoomID = r.int32();
                    break;
                case 3:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserFoldReq;
    })();

    game.UserFoldResp = (function() {

        /**
         * Properties of a UserFoldResp.
         * @memberof game
         * @interface IUserFoldResp
         * @property {game.ReturnCode|null} [Code] UserFoldResp Code
         * @property {string|null} [Msg] UserFoldResp Msg
         */

        /**
         * Constructs a new UserFoldResp.
         * @memberof game
         * @classdesc Represents a UserFoldResp.
         * @implements IUserFoldResp
         * @constructor
         * @param {game.IUserFoldResp=} [p] Properties to set
         */
        function UserFoldResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserFoldResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserFoldResp
         * @instance
         */
        UserFoldResp.prototype.Code = 0;

        /**
         * UserFoldResp Msg.
         * @member {string} Msg
         * @memberof game.UserFoldResp
         * @instance
         */
        UserFoldResp.prototype.Msg = "";

        /**
         * Encodes the specified UserFoldResp message. Does not implicitly {@link game.UserFoldResp.verify|verify} messages.
         * @function encode
         * @memberof game.UserFoldResp
         * @static
         * @param {game.IUserFoldResp} m UserFoldResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserFoldResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        /**
         * Decodes a UserFoldResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserFoldResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserFoldResp} UserFoldResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserFoldResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserFoldResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserFoldResp;
    })();

    game.UserBetReq = (function() {

        /**
         * Properties of a UserBetReq.
         * @memberof game
         * @interface IUserBetReq
         * @property {number|null} [Amount] UserBetReq Amount
         * @property {number|null} [StepNumber] UserBetReq StepNumber
         * @property {number|null} [RoomID] UserBetReq RoomID
         * @property {number|null} [TableID] UserBetReq TableID
         */

        /**
         * Constructs a new UserBetReq.
         * @memberof game
         * @classdesc Represents a UserBetReq.
         * @implements IUserBetReq
         * @constructor
         * @param {game.IUserBetReq=} [p] Properties to set
         */
        function UserBetReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserBetReq Amount.
         * @member {number} Amount
         * @memberof game.UserBetReq
         * @instance
         */
        UserBetReq.prototype.Amount = 0;

        /**
         * UserBetReq StepNumber.
         * @member {number} StepNumber
         * @memberof game.UserBetReq
         * @instance
         */
        UserBetReq.prototype.StepNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserBetReq RoomID.
         * @member {number} RoomID
         * @memberof game.UserBetReq
         * @instance
         */
        UserBetReq.prototype.RoomID = 0;

        /**
         * UserBetReq TableID.
         * @member {number} TableID
         * @memberof game.UserBetReq
         * @instance
         */
        UserBetReq.prototype.TableID = 0;

        /**
         * Encodes the specified UserBetReq message. Does not implicitly {@link game.UserBetReq.verify|verify} messages.
         * @function encode
         * @memberof game.UserBetReq
         * @static
         * @param {game.IUserBetReq} m UserBetReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserBetReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(9).double(m.Amount);
            if (m.StepNumber != null && Object.hasOwnProperty.call(m, "StepNumber"))
                w.uint32(16).int64(m.StepNumber);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserBetReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserBetReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserBetReq} UserBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserBetReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserBetReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Amount = r.double();
                    break;
                case 2:
                    m.StepNumber = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserBetReq;
    })();

    game.UserBetResp = (function() {

        /**
         * Properties of a UserBetResp.
         * @memberof game
         * @interface IUserBetResp
         * @property {game.ReturnCode|null} [Code] UserBetResp Code
         * @property {string|null} [Msg] UserBetResp Msg
         */

        /**
         * Constructs a new UserBetResp.
         * @memberof game
         * @classdesc Represents a UserBetResp.
         * @implements IUserBetResp
         * @constructor
         * @param {game.IUserBetResp=} [p] Properties to set
         */
        function UserBetResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserBetResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserBetResp
         * @instance
         */
        UserBetResp.prototype.Code = 0;

        /**
         * UserBetResp Msg.
         * @member {string} Msg
         * @memberof game.UserBetResp
         * @instance
         */
        UserBetResp.prototype.Msg = "";

        /**
         * Encodes the specified UserBetResp message. Does not implicitly {@link game.UserBetResp.verify|verify} messages.
         * @function encode
         * @memberof game.UserBetResp
         * @static
         * @param {game.IUserBetResp} m UserBetResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserBetResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        /**
         * Decodes a UserBetResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserBetResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserBetResp} UserBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserBetResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserBetResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserBetResp;
    })();

    game.UserCallReq = (function() {

        /**
         * Properties of a UserCallReq.
         * @memberof game
         * @interface IUserCallReq
         * @property {number|null} [StepNumber] UserCallReq StepNumber
         * @property {number|null} [RoomID] UserCallReq RoomID
         * @property {number|null} [TableID] UserCallReq TableID
         */

        /**
         * Constructs a new UserCallReq.
         * @memberof game
         * @classdesc Represents a UserCallReq.
         * @implements IUserCallReq
         * @constructor
         * @param {game.IUserCallReq=} [p] Properties to set
         */
        function UserCallReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserCallReq StepNumber.
         * @member {number} StepNumber
         * @memberof game.UserCallReq
         * @instance
         */
        UserCallReq.prototype.StepNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserCallReq RoomID.
         * @member {number} RoomID
         * @memberof game.UserCallReq
         * @instance
         */
        UserCallReq.prototype.RoomID = 0;

        /**
         * UserCallReq TableID.
         * @member {number} TableID
         * @memberof game.UserCallReq
         * @instance
         */
        UserCallReq.prototype.TableID = 0;

        /**
         * Encodes the specified UserCallReq message. Does not implicitly {@link game.UserCallReq.verify|verify} messages.
         * @function encode
         * @memberof game.UserCallReq
         * @static
         * @param {game.IUserCallReq} m UserCallReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserCallReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.StepNumber != null && Object.hasOwnProperty.call(m, "StepNumber"))
                w.uint32(8).int64(m.StepNumber);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(16).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(24).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserCallReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserCallReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserCallReq} UserCallReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserCallReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserCallReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.StepNumber = r.int64();
                    break;
                case 2:
                    m.RoomID = r.int32();
                    break;
                case 3:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserCallReq;
    })();

    game.UserCallResp = (function() {

        /**
         * Properties of a UserCallResp.
         * @memberof game
         * @interface IUserCallResp
         * @property {game.ReturnCode|null} [Code] UserCallResp Code
         * @property {string|null} [Msg] UserCallResp Msg
         */

        /**
         * Constructs a new UserCallResp.
         * @memberof game
         * @classdesc Represents a UserCallResp.
         * @implements IUserCallResp
         * @constructor
         * @param {game.IUserCallResp=} [p] Properties to set
         */
        function UserCallResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserCallResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserCallResp
         * @instance
         */
        UserCallResp.prototype.Code = 0;

        /**
         * UserCallResp Msg.
         * @member {string} Msg
         * @memberof game.UserCallResp
         * @instance
         */
        UserCallResp.prototype.Msg = "";

        /**
         * Encodes the specified UserCallResp message. Does not implicitly {@link game.UserCallResp.verify|verify} messages.
         * @function encode
         * @memberof game.UserCallResp
         * @static
         * @param {game.IUserCallResp} m UserCallResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserCallResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        /**
         * Decodes a UserCallResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserCallResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserCallResp} UserCallResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserCallResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserCallResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserCallResp;
    })();

    game.UserRaiseReq = (function() {

        /**
         * Properties of a UserRaiseReq.
         * @memberof game
         * @interface IUserRaiseReq
         * @property {number|null} [Amount] UserRaiseReq Amount
         * @property {number|null} [StepNumber] UserRaiseReq StepNumber
         * @property {number|null} [RoomID] UserRaiseReq RoomID
         * @property {number|null} [TableID] UserRaiseReq TableID
         */

        /**
         * Constructs a new UserRaiseReq.
         * @memberof game
         * @classdesc Represents a UserRaiseReq.
         * @implements IUserRaiseReq
         * @constructor
         * @param {game.IUserRaiseReq=} [p] Properties to set
         */
        function UserRaiseReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserRaiseReq Amount.
         * @member {number} Amount
         * @memberof game.UserRaiseReq
         * @instance
         */
        UserRaiseReq.prototype.Amount = 0;

        /**
         * UserRaiseReq StepNumber.
         * @member {number} StepNumber
         * @memberof game.UserRaiseReq
         * @instance
         */
        UserRaiseReq.prototype.StepNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRaiseReq RoomID.
         * @member {number} RoomID
         * @memberof game.UserRaiseReq
         * @instance
         */
        UserRaiseReq.prototype.RoomID = 0;

        /**
         * UserRaiseReq TableID.
         * @member {number} TableID
         * @memberof game.UserRaiseReq
         * @instance
         */
        UserRaiseReq.prototype.TableID = 0;

        /**
         * Encodes the specified UserRaiseReq message. Does not implicitly {@link game.UserRaiseReq.verify|verify} messages.
         * @function encode
         * @memberof game.UserRaiseReq
         * @static
         * @param {game.IUserRaiseReq} m UserRaiseReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserRaiseReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(9).double(m.Amount);
            if (m.StepNumber != null && Object.hasOwnProperty.call(m, "StepNumber"))
                w.uint32(16).int64(m.StepNumber);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserRaiseReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserRaiseReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserRaiseReq} UserRaiseReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserRaiseReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserRaiseReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Amount = r.double();
                    break;
                case 2:
                    m.StepNumber = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserRaiseReq;
    })();

    game.UserRaiseResp = (function() {

        /**
         * Properties of a UserRaiseResp.
         * @memberof game
         * @interface IUserRaiseResp
         * @property {game.ReturnCode|null} [Code] UserRaiseResp Code
         * @property {string|null} [Msg] UserRaiseResp Msg
         */

        /**
         * Constructs a new UserRaiseResp.
         * @memberof game
         * @classdesc Represents a UserRaiseResp.
         * @implements IUserRaiseResp
         * @constructor
         * @param {game.IUserRaiseResp=} [p] Properties to set
         */
        function UserRaiseResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserRaiseResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserRaiseResp
         * @instance
         */
        UserRaiseResp.prototype.Code = 0;

        /**
         * UserRaiseResp Msg.
         * @member {string} Msg
         * @memberof game.UserRaiseResp
         * @instance
         */
        UserRaiseResp.prototype.Msg = "";

        /**
         * Encodes the specified UserRaiseResp message. Does not implicitly {@link game.UserRaiseResp.verify|verify} messages.
         * @function encode
         * @memberof game.UserRaiseResp
         * @static
         * @param {game.IUserRaiseResp} m UserRaiseResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserRaiseResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        /**
         * Decodes a UserRaiseResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserRaiseResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserRaiseResp} UserRaiseResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserRaiseResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserRaiseResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserRaiseResp;
    })();

    game.UserAllInReq = (function() {

        /**
         * Properties of a UserAllInReq.
         * @memberof game
         * @interface IUserAllInReq
         * @property {number|null} [StepNumber] UserAllInReq StepNumber
         * @property {number|null} [RoomID] UserAllInReq RoomID
         * @property {number|null} [TableID] UserAllInReq TableID
         */

        /**
         * Constructs a new UserAllInReq.
         * @memberof game
         * @classdesc Represents a UserAllInReq.
         * @implements IUserAllInReq
         * @constructor
         * @param {game.IUserAllInReq=} [p] Properties to set
         */
        function UserAllInReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserAllInReq StepNumber.
         * @member {number} StepNumber
         * @memberof game.UserAllInReq
         * @instance
         */
        UserAllInReq.prototype.StepNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserAllInReq RoomID.
         * @member {number} RoomID
         * @memberof game.UserAllInReq
         * @instance
         */
        UserAllInReq.prototype.RoomID = 0;

        /**
         * UserAllInReq TableID.
         * @member {number} TableID
         * @memberof game.UserAllInReq
         * @instance
         */
        UserAllInReq.prototype.TableID = 0;

        /**
         * Encodes the specified UserAllInReq message. Does not implicitly {@link game.UserAllInReq.verify|verify} messages.
         * @function encode
         * @memberof game.UserAllInReq
         * @static
         * @param {game.IUserAllInReq} m UserAllInReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserAllInReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.StepNumber != null && Object.hasOwnProperty.call(m, "StepNumber"))
                w.uint32(8).int64(m.StepNumber);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(16).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(24).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserAllInReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserAllInReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserAllInReq} UserAllInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserAllInReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserAllInReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.StepNumber = r.int64();
                    break;
                case 2:
                    m.RoomID = r.int32();
                    break;
                case 3:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserAllInReq;
    })();

    game.UserAllInResp = (function() {

        /**
         * Properties of a UserAllInResp.
         * @memberof game
         * @interface IUserAllInResp
         * @property {game.ReturnCode|null} [Code] UserAllInResp Code
         * @property {string|null} [Msg] UserAllInResp Msg
         */

        /**
         * Constructs a new UserAllInResp.
         * @memberof game
         * @classdesc Represents a UserAllInResp.
         * @implements IUserAllInResp
         * @constructor
         * @param {game.IUserAllInResp=} [p] Properties to set
         */
        function UserAllInResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserAllInResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserAllInResp
         * @instance
         */
        UserAllInResp.prototype.Code = 0;

        /**
         * UserAllInResp Msg.
         * @member {string} Msg
         * @memberof game.UserAllInResp
         * @instance
         */
        UserAllInResp.prototype.Msg = "";

        /**
         * Encodes the specified UserAllInResp message. Does not implicitly {@link game.UserAllInResp.verify|verify} messages.
         * @function encode
         * @memberof game.UserAllInResp
         * @static
         * @param {game.IUserAllInResp} m UserAllInResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserAllInResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        /**
         * Decodes a UserAllInResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserAllInResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserAllInResp} UserAllInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserAllInResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserAllInResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserAllInResp;
    })();

    game.UserCheckReq = (function() {

        /**
         * Properties of a UserCheckReq.
         * @memberof game
         * @interface IUserCheckReq
         * @property {number|null} [StepNumber] UserCheckReq StepNumber
         * @property {number|null} [RoomID] UserCheckReq RoomID
         * @property {number|null} [TableID] UserCheckReq TableID
         */

        /**
         * Constructs a new UserCheckReq.
         * @memberof game
         * @classdesc Represents a UserCheckReq.
         * @implements IUserCheckReq
         * @constructor
         * @param {game.IUserCheckReq=} [p] Properties to set
         */
        function UserCheckReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserCheckReq StepNumber.
         * @member {number} StepNumber
         * @memberof game.UserCheckReq
         * @instance
         */
        UserCheckReq.prototype.StepNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserCheckReq RoomID.
         * @member {number} RoomID
         * @memberof game.UserCheckReq
         * @instance
         */
        UserCheckReq.prototype.RoomID = 0;

        /**
         * UserCheckReq TableID.
         * @member {number} TableID
         * @memberof game.UserCheckReq
         * @instance
         */
        UserCheckReq.prototype.TableID = 0;

        /**
         * Encodes the specified UserCheckReq message. Does not implicitly {@link game.UserCheckReq.verify|verify} messages.
         * @function encode
         * @memberof game.UserCheckReq
         * @static
         * @param {game.IUserCheckReq} m UserCheckReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserCheckReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.StepNumber != null && Object.hasOwnProperty.call(m, "StepNumber"))
                w.uint32(8).int64(m.StepNumber);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(16).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(24).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserCheckReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserCheckReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserCheckReq} UserCheckReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserCheckReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserCheckReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.StepNumber = r.int64();
                    break;
                case 2:
                    m.RoomID = r.int32();
                    break;
                case 3:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserCheckReq;
    })();

    game.UserCheckResp = (function() {

        /**
         * Properties of a UserCheckResp.
         * @memberof game
         * @interface IUserCheckResp
         * @property {game.ReturnCode|null} [Code] UserCheckResp Code
         * @property {string|null} [Msg] UserCheckResp Msg
         */

        /**
         * Constructs a new UserCheckResp.
         * @memberof game
         * @classdesc Represents a UserCheckResp.
         * @implements IUserCheckResp
         * @constructor
         * @param {game.IUserCheckResp=} [p] Properties to set
         */
        function UserCheckResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserCheckResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserCheckResp
         * @instance
         */
        UserCheckResp.prototype.Code = 0;

        /**
         * UserCheckResp Msg.
         * @member {string} Msg
         * @memberof game.UserCheckResp
         * @instance
         */
        UserCheckResp.prototype.Msg = "";

        /**
         * Encodes the specified UserCheckResp message. Does not implicitly {@link game.UserCheckResp.verify|verify} messages.
         * @function encode
         * @memberof game.UserCheckResp
         * @static
         * @param {game.IUserCheckResp} m UserCheckResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserCheckResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        /**
         * Decodes a UserCheckResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserCheckResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserCheckResp} UserCheckResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserCheckResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserCheckResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserCheckResp;
    })();

    game.RecordListReq = (function() {

        /**
         * Properties of a RecordListReq.
         * @memberof game
         * @interface IRecordListReq
         * @property {number|null} [RoomID] RecordListReq RoomID
         * @property {number|null} [TableID] RecordListReq TableID
         */

        /**
         * Constructs a new RecordListReq.
         * @memberof game
         * @classdesc Represents a RecordListReq.
         * @implements IRecordListReq
         * @constructor
         * @param {game.IRecordListReq=} [p] Properties to set
         */
        function RecordListReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RecordListReq RoomID.
         * @member {number} RoomID
         * @memberof game.RecordListReq
         * @instance
         */
        RecordListReq.prototype.RoomID = 0;

        /**
         * RecordListReq TableID.
         * @member {number} TableID
         * @memberof game.RecordListReq
         * @instance
         */
        RecordListReq.prototype.TableID = 0;

        /**
         * Encodes the specified RecordListReq message. Does not implicitly {@link game.RecordListReq.verify|verify} messages.
         * @function encode
         * @memberof game.RecordListReq
         * @static
         * @param {game.IRecordListReq} m RecordListReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RecordListReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a RecordListReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.RecordListReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.RecordListReq} RecordListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RecordListReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.RecordListReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RecordListReq;
    })();

    game.RecordListResp = (function() {

        /**
         * Properties of a RecordListResp.
         * @memberof game
         * @interface IRecordListResp
         * @property {game.ReturnCode|null} [Code] RecordListResp Code
         * @property {number|null} [RoomID] RecordListResp RoomID
         * @property {number|null} [TableID] RecordListResp TableID
         * @property {Array.<game.IRecordListInfo>|null} [list] RecordListResp list
         */

        /**
         * Constructs a new RecordListResp.
         * @memberof game
         * @classdesc Represents a RecordListResp.
         * @implements IRecordListResp
         * @constructor
         * @param {game.IRecordListResp=} [p] Properties to set
         */
        function RecordListResp(p) {
            this.list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RecordListResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.RecordListResp
         * @instance
         */
        RecordListResp.prototype.Code = 0;

        /**
         * RecordListResp RoomID.
         * @member {number} RoomID
         * @memberof game.RecordListResp
         * @instance
         */
        RecordListResp.prototype.RoomID = 0;

        /**
         * RecordListResp TableID.
         * @member {number} TableID
         * @memberof game.RecordListResp
         * @instance
         */
        RecordListResp.prototype.TableID = 0;

        /**
         * RecordListResp list.
         * @member {Array.<game.IRecordListInfo>} list
         * @memberof game.RecordListResp
         * @instance
         */
        RecordListResp.prototype.list = $util.emptyArray;

        /**
         * Encodes the specified RecordListResp message. Does not implicitly {@link game.RecordListResp.verify|verify} messages.
         * @function encode
         * @memberof game.RecordListResp
         * @static
         * @param {game.IRecordListResp} m RecordListResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RecordListResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(16).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(24).int32(m.TableID);
            if (m.list != null && m.list.length) {
                for (var i = 0; i < m.list.length; ++i)
                    $root.game.RecordListInfo.encode(m.list[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RecordListResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.RecordListResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.RecordListResp} RecordListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RecordListResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.RecordListResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.RoomID = r.int32();
                    break;
                case 3:
                    m.TableID = r.int32();
                    break;
                case 4:
                    if (!(m.list && m.list.length))
                        m.list = [];
                    m.list.push($root.game.RecordListInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RecordListResp;
    })();

    game.RecordDetailsReq = (function() {

        /**
         * Properties of a RecordDetailsReq.
         * @memberof game
         * @interface IRecordDetailsReq
         * @property {number|null} [RoomID] RecordDetailsReq RoomID
         * @property {number|null} [TableID] RecordDetailsReq TableID
         * @property {number|null} [Index] RecordDetailsReq Index
         * @property {string|null} [Code] RecordDetailsReq Code
         */

        /**
         * Constructs a new RecordDetailsReq.
         * @memberof game
         * @classdesc Represents a RecordDetailsReq.
         * @implements IRecordDetailsReq
         * @constructor
         * @param {game.IRecordDetailsReq=} [p] Properties to set
         */
        function RecordDetailsReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RecordDetailsReq RoomID.
         * @member {number} RoomID
         * @memberof game.RecordDetailsReq
         * @instance
         */
        RecordDetailsReq.prototype.RoomID = 0;

        /**
         * RecordDetailsReq TableID.
         * @member {number} TableID
         * @memberof game.RecordDetailsReq
         * @instance
         */
        RecordDetailsReq.prototype.TableID = 0;

        /**
         * RecordDetailsReq Index.
         * @member {number} Index
         * @memberof game.RecordDetailsReq
         * @instance
         */
        RecordDetailsReq.prototype.Index = 0;

        /**
         * RecordDetailsReq Code.
         * @member {string} Code
         * @memberof game.RecordDetailsReq
         * @instance
         */
        RecordDetailsReq.prototype.Code = "";

        /**
         * Encodes the specified RecordDetailsReq message. Does not implicitly {@link game.RecordDetailsReq.verify|verify} messages.
         * @function encode
         * @memberof game.RecordDetailsReq
         * @static
         * @param {game.IRecordDetailsReq} m RecordDetailsReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RecordDetailsReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            if (m.Index != null && Object.hasOwnProperty.call(m, "Index"))
                w.uint32(24).int32(m.Index);
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(34).string(m.Code);
            return w;
        };

        /**
         * Decodes a RecordDetailsReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.RecordDetailsReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.RecordDetailsReq} RecordDetailsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RecordDetailsReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.RecordDetailsReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                case 3:
                    m.Index = r.int32();
                    break;
                case 4:
                    m.Code = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RecordDetailsReq;
    })();

    game.RecordDetailsResp = (function() {

        /**
         * Properties of a RecordDetailsResp.
         * @memberof game
         * @interface IRecordDetailsResp
         * @property {game.ReturnCode|null} [Code] RecordDetailsResp Code
         * @property {number|null} [index] RecordDetailsResp index
         * @property {string|null} [code] RecordDetailsResp code
         * @property {Array.<game.IUserActionNtc>|null} [PreFlopActionList] RecordDetailsResp PreFlopActionList
         * @property {Array.<game.IUserActionNtc>|null} [FlopActionList] RecordDetailsResp FlopActionList
         * @property {Array.<game.IUserActionNtc>|null} [TurnActionList] RecordDetailsResp TurnActionList
         * @property {Array.<game.IUserActionNtc>|null} [RiverActionList] RecordDetailsResp RiverActionList
         * @property {Array.<game.IUserGameResult>|null} [Results] RecordDetailsResp Results
         */

        /**
         * Constructs a new RecordDetailsResp.
         * @memberof game
         * @classdesc Represents a RecordDetailsResp.
         * @implements IRecordDetailsResp
         * @constructor
         * @param {game.IRecordDetailsResp=} [p] Properties to set
         */
        function RecordDetailsResp(p) {
            this.PreFlopActionList = [];
            this.FlopActionList = [];
            this.TurnActionList = [];
            this.RiverActionList = [];
            this.Results = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RecordDetailsResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.RecordDetailsResp
         * @instance
         */
        RecordDetailsResp.prototype.Code = 0;

        /**
         * RecordDetailsResp index.
         * @member {number} index
         * @memberof game.RecordDetailsResp
         * @instance
         */
        RecordDetailsResp.prototype.index = 0;

        /**
         * RecordDetailsResp code.
         * @member {string} code
         * @memberof game.RecordDetailsResp
         * @instance
         */
        RecordDetailsResp.prototype.code = "";

        /**
         * RecordDetailsResp PreFlopActionList.
         * @member {Array.<game.IUserActionNtc>} PreFlopActionList
         * @memberof game.RecordDetailsResp
         * @instance
         */
        RecordDetailsResp.prototype.PreFlopActionList = $util.emptyArray;

        /**
         * RecordDetailsResp FlopActionList.
         * @member {Array.<game.IUserActionNtc>} FlopActionList
         * @memberof game.RecordDetailsResp
         * @instance
         */
        RecordDetailsResp.prototype.FlopActionList = $util.emptyArray;

        /**
         * RecordDetailsResp TurnActionList.
         * @member {Array.<game.IUserActionNtc>} TurnActionList
         * @memberof game.RecordDetailsResp
         * @instance
         */
        RecordDetailsResp.prototype.TurnActionList = $util.emptyArray;

        /**
         * RecordDetailsResp RiverActionList.
         * @member {Array.<game.IUserActionNtc>} RiverActionList
         * @memberof game.RecordDetailsResp
         * @instance
         */
        RecordDetailsResp.prototype.RiverActionList = $util.emptyArray;

        /**
         * RecordDetailsResp Results.
         * @member {Array.<game.IUserGameResult>} Results
         * @memberof game.RecordDetailsResp
         * @instance
         */
        RecordDetailsResp.prototype.Results = $util.emptyArray;

        /**
         * Encodes the specified RecordDetailsResp message. Does not implicitly {@link game.RecordDetailsResp.verify|verify} messages.
         * @function encode
         * @memberof game.RecordDetailsResp
         * @static
         * @param {game.IRecordDetailsResp} m RecordDetailsResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RecordDetailsResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                w.uint32(16).int32(m.index);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(26).string(m.code);
            if (m.PreFlopActionList != null && m.PreFlopActionList.length) {
                for (var i = 0; i < m.PreFlopActionList.length; ++i)
                    $root.game.UserActionNtc.encode(m.PreFlopActionList[i], w.uint32(34).fork()).ldelim();
            }
            if (m.FlopActionList != null && m.FlopActionList.length) {
                for (var i = 0; i < m.FlopActionList.length; ++i)
                    $root.game.UserActionNtc.encode(m.FlopActionList[i], w.uint32(42).fork()).ldelim();
            }
            if (m.TurnActionList != null && m.TurnActionList.length) {
                for (var i = 0; i < m.TurnActionList.length; ++i)
                    $root.game.UserActionNtc.encode(m.TurnActionList[i], w.uint32(50).fork()).ldelim();
            }
            if (m.RiverActionList != null && m.RiverActionList.length) {
                for (var i = 0; i < m.RiverActionList.length; ++i)
                    $root.game.UserActionNtc.encode(m.RiverActionList[i], w.uint32(58).fork()).ldelim();
            }
            if (m.Results != null && m.Results.length) {
                for (var i = 0; i < m.Results.length; ++i)
                    $root.game.UserGameResult.encode(m.Results[i], w.uint32(66).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RecordDetailsResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.RecordDetailsResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.RecordDetailsResp} RecordDetailsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RecordDetailsResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.RecordDetailsResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.index = r.int32();
                    break;
                case 3:
                    m.code = r.string();
                    break;
                case 4:
                    if (!(m.PreFlopActionList && m.PreFlopActionList.length))
                        m.PreFlopActionList = [];
                    m.PreFlopActionList.push($root.game.UserActionNtc.decode(r, r.uint32()));
                    break;
                case 5:
                    if (!(m.FlopActionList && m.FlopActionList.length))
                        m.FlopActionList = [];
                    m.FlopActionList.push($root.game.UserActionNtc.decode(r, r.uint32()));
                    break;
                case 6:
                    if (!(m.TurnActionList && m.TurnActionList.length))
                        m.TurnActionList = [];
                    m.TurnActionList.push($root.game.UserActionNtc.decode(r, r.uint32()));
                    break;
                case 7:
                    if (!(m.RiverActionList && m.RiverActionList.length))
                        m.RiverActionList = [];
                    m.RiverActionList.push($root.game.UserActionNtc.decode(r, r.uint32()));
                    break;
                case 8:
                    if (!(m.Results && m.Results.length))
                        m.Results = [];
                    m.Results.push($root.game.UserGameResult.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RecordDetailsResp;
    })();

    game.EmojiChatReq = (function() {

        /**
         * Properties of an EmojiChatReq.
         * @memberof game
         * @interface IEmojiChatReq
         * @property {number|null} [RoomID] EmojiChatReq RoomID
         * @property {number|null} [TableID] EmojiChatReq TableID
         * @property {number|null} [EmojiIndex] EmojiChatReq EmojiIndex
         */

        /**
         * Constructs a new EmojiChatReq.
         * @memberof game
         * @classdesc Represents an EmojiChatReq.
         * @implements IEmojiChatReq
         * @constructor
         * @param {game.IEmojiChatReq=} [p] Properties to set
         */
        function EmojiChatReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * EmojiChatReq RoomID.
         * @member {number} RoomID
         * @memberof game.EmojiChatReq
         * @instance
         */
        EmojiChatReq.prototype.RoomID = 0;

        /**
         * EmojiChatReq TableID.
         * @member {number} TableID
         * @memberof game.EmojiChatReq
         * @instance
         */
        EmojiChatReq.prototype.TableID = 0;

        /**
         * EmojiChatReq EmojiIndex.
         * @member {number} EmojiIndex
         * @memberof game.EmojiChatReq
         * @instance
         */
        EmojiChatReq.prototype.EmojiIndex = 0;

        /**
         * Encodes the specified EmojiChatReq message. Does not implicitly {@link game.EmojiChatReq.verify|verify} messages.
         * @function encode
         * @memberof game.EmojiChatReq
         * @static
         * @param {game.IEmojiChatReq} m EmojiChatReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        EmojiChatReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            if (m.EmojiIndex != null && Object.hasOwnProperty.call(m, "EmojiIndex"))
                w.uint32(24).int32(m.EmojiIndex);
            return w;
        };

        /**
         * Decodes an EmojiChatReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.EmojiChatReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.EmojiChatReq} EmojiChatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        EmojiChatReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.EmojiChatReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                case 3:
                    m.EmojiIndex = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return EmojiChatReq;
    })();

    game.EmojiChatResp = (function() {

        /**
         * Properties of an EmojiChatResp.
         * @memberof game
         * @interface IEmojiChatResp
         * @property {game.ReturnCode|null} [Code] EmojiChatResp Code
         */

        /**
         * Constructs a new EmojiChatResp.
         * @memberof game
         * @classdesc Represents an EmojiChatResp.
         * @implements IEmojiChatResp
         * @constructor
         * @param {game.IEmojiChatResp=} [p] Properties to set
         */
        function EmojiChatResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * EmojiChatResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.EmojiChatResp
         * @instance
         */
        EmojiChatResp.prototype.Code = 0;

        /**
         * Encodes the specified EmojiChatResp message. Does not implicitly {@link game.EmojiChatResp.verify|verify} messages.
         * @function encode
         * @memberof game.EmojiChatResp
         * @static
         * @param {game.IEmojiChatResp} m EmojiChatResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        EmojiChatResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            return w;
        };

        /**
         * Decodes an EmojiChatResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.EmojiChatResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.EmojiChatResp} EmojiChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        EmojiChatResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.EmojiChatResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return EmojiChatResp;
    })();

    game.TextChatReq = (function() {

        /**
         * Properties of a TextChatReq.
         * @memberof game
         * @interface ITextChatReq
         * @property {number|null} [RoomID] TextChatReq RoomID
         * @property {number|null} [TableID] TextChatReq TableID
         * @property {string|null} [Text] TextChatReq Text
         */

        /**
         * Constructs a new TextChatReq.
         * @memberof game
         * @classdesc Represents a TextChatReq.
         * @implements ITextChatReq
         * @constructor
         * @param {game.ITextChatReq=} [p] Properties to set
         */
        function TextChatReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * TextChatReq RoomID.
         * @member {number} RoomID
         * @memberof game.TextChatReq
         * @instance
         */
        TextChatReq.prototype.RoomID = 0;

        /**
         * TextChatReq TableID.
         * @member {number} TableID
         * @memberof game.TextChatReq
         * @instance
         */
        TextChatReq.prototype.TableID = 0;

        /**
         * TextChatReq Text.
         * @member {string} Text
         * @memberof game.TextChatReq
         * @instance
         */
        TextChatReq.prototype.Text = "";

        /**
         * Encodes the specified TextChatReq message. Does not implicitly {@link game.TextChatReq.verify|verify} messages.
         * @function encode
         * @memberof game.TextChatReq
         * @static
         * @param {game.ITextChatReq} m TextChatReq message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        TextChatReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            if (m.Text != null && Object.hasOwnProperty.call(m, "Text"))
                w.uint32(26).string(m.Text);
            return w;
        };

        /**
         * Decodes a TextChatReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.TextChatReq
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.TextChatReq} TextChatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        TextChatReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.TextChatReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                case 3:
                    m.Text = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TextChatReq;
    })();

    game.TextChatResp = (function() {

        /**
         * Properties of a TextChatResp.
         * @memberof game
         * @interface ITextChatResp
         * @property {game.ReturnCode|null} [Code] TextChatResp Code
         */

        /**
         * Constructs a new TextChatResp.
         * @memberof game
         * @classdesc Represents a TextChatResp.
         * @implements ITextChatResp
         * @constructor
         * @param {game.ITextChatResp=} [p] Properties to set
         */
        function TextChatResp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * TextChatResp Code.
         * @member {game.ReturnCode} Code
         * @memberof game.TextChatResp
         * @instance
         */
        TextChatResp.prototype.Code = 0;

        /**
         * Encodes the specified TextChatResp message. Does not implicitly {@link game.TextChatResp.verify|verify} messages.
         * @function encode
         * @memberof game.TextChatResp
         * @static
         * @param {game.ITextChatResp} m TextChatResp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        TextChatResp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            return w;
        };

        /**
         * Decodes a TextChatResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.TextChatResp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.TextChatResp} TextChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        TextChatResp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.TextChatResp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TextChatResp;
    })();

    game.UserSitDownNtc = (function() {

        /**
         * Properties of a UserSitDownNtc.
         * @memberof game
         * @interface IUserSitDownNtc
         * @property {game.ReturnCode|null} [Code] UserSitDownNtc Code
         * @property {game.IGameUser|null} [RoomUser] UserSitDownNtc RoomUser
         */

        /**
         * Constructs a new UserSitDownNtc.
         * @memberof game
         * @classdesc Represents a UserSitDownNtc.
         * @implements IUserSitDownNtc
         * @constructor
         * @param {game.IUserSitDownNtc=} [p] Properties to set
         */
        function UserSitDownNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserSitDownNtc Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserSitDownNtc
         * @instance
         */
        UserSitDownNtc.prototype.Code = 0;

        /**
         * UserSitDownNtc RoomUser.
         * @member {game.IGameUser|null|undefined} RoomUser
         * @memberof game.UserSitDownNtc
         * @instance
         */
        UserSitDownNtc.prototype.RoomUser = null;

        /**
         * Encodes the specified UserSitDownNtc message. Does not implicitly {@link game.UserSitDownNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserSitDownNtc
         * @static
         * @param {game.IUserSitDownNtc} m UserSitDownNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserSitDownNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.RoomUser != null && Object.hasOwnProperty.call(m, "RoomUser"))
                $root.game.GameUser.encode(m.RoomUser, w.uint32(18).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a UserSitDownNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserSitDownNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserSitDownNtc} UserSitDownNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserSitDownNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserSitDownNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.RoomUser = $root.game.GameUser.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserSitDownNtc;
    })();

    game.UserStandUpNtc = (function() {

        /**
         * Properties of a UserStandUpNtc.
         * @memberof game
         * @interface IUserStandUpNtc
         * @property {game.ReturnCode|null} [Code] UserStandUpNtc Code
         * @property {number|null} [UserID] UserStandUpNtc UserID
         * @property {number|null} [RoomID] UserStandUpNtc RoomID
         * @property {number|null} [TableID] UserStandUpNtc TableID
         * @property {number|null} [ChairID] UserStandUpNtc ChairID
         * @property {number|null} [Balance] UserStandUpNtc Balance
         */

        /**
         * Constructs a new UserStandUpNtc.
         * @memberof game
         * @classdesc Represents a UserStandUpNtc.
         * @implements IUserStandUpNtc
         * @constructor
         * @param {game.IUserStandUpNtc=} [p] Properties to set
         */
        function UserStandUpNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserStandUpNtc Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserStandUpNtc
         * @instance
         */
        UserStandUpNtc.prototype.Code = 0;

        /**
         * UserStandUpNtc UserID.
         * @member {number} UserID
         * @memberof game.UserStandUpNtc
         * @instance
         */
        UserStandUpNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserStandUpNtc RoomID.
         * @member {number} RoomID
         * @memberof game.UserStandUpNtc
         * @instance
         */
        UserStandUpNtc.prototype.RoomID = 0;

        /**
         * UserStandUpNtc TableID.
         * @member {number} TableID
         * @memberof game.UserStandUpNtc
         * @instance
         */
        UserStandUpNtc.prototype.TableID = 0;

        /**
         * UserStandUpNtc ChairID.
         * @member {number} ChairID
         * @memberof game.UserStandUpNtc
         * @instance
         */
        UserStandUpNtc.prototype.ChairID = 0;

        /**
         * UserStandUpNtc Balance.
         * @member {number} Balance
         * @memberof game.UserStandUpNtc
         * @instance
         */
        UserStandUpNtc.prototype.Balance = 0;

        /**
         * Encodes the specified UserStandUpNtc message. Does not implicitly {@link game.UserStandUpNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserStandUpNtc
         * @static
         * @param {game.IUserStandUpNtc} m UserStandUpNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserStandUpNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(16).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            if (m.ChairID != null && Object.hasOwnProperty.call(m, "ChairID"))
                w.uint32(40).int32(m.ChairID);
            if (m.Balance != null && Object.hasOwnProperty.call(m, "Balance"))
                w.uint32(49).double(m.Balance);
            return w;
        };

        /**
         * Decodes a UserStandUpNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserStandUpNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserStandUpNtc} UserStandUpNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserStandUpNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserStandUpNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.UserID = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                case 5:
                    m.ChairID = r.int32();
                    break;
                case 6:
                    m.Balance = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserStandUpNtc;
    })();

    game.UserTransferInNtc = (function() {

        /**
         * Properties of a UserTransferInNtc.
         * @memberof game
         * @interface IUserTransferInNtc
         * @property {game.ReturnCode|null} [Code] UserTransferInNtc Code
         * @property {number|null} [UserID] UserTransferInNtc UserID
         * @property {number|null} [RoomID] UserTransferInNtc RoomID
         * @property {number|null} [TableID] UserTransferInNtc TableID
         * @property {number|null} [Amount] UserTransferInNtc Amount
         * @property {number|null} [CurrScore] UserTransferInNtc CurrScore
         */

        /**
         * Constructs a new UserTransferInNtc.
         * @memberof game
         * @classdesc Represents a UserTransferInNtc.
         * @implements IUserTransferInNtc
         * @constructor
         * @param {game.IUserTransferInNtc=} [p] Properties to set
         */
        function UserTransferInNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserTransferInNtc Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserTransferInNtc
         * @instance
         */
        UserTransferInNtc.prototype.Code = 0;

        /**
         * UserTransferInNtc UserID.
         * @member {number} UserID
         * @memberof game.UserTransferInNtc
         * @instance
         */
        UserTransferInNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserTransferInNtc RoomID.
         * @member {number} RoomID
         * @memberof game.UserTransferInNtc
         * @instance
         */
        UserTransferInNtc.prototype.RoomID = 0;

        /**
         * UserTransferInNtc TableID.
         * @member {number} TableID
         * @memberof game.UserTransferInNtc
         * @instance
         */
        UserTransferInNtc.prototype.TableID = 0;

        /**
         * UserTransferInNtc Amount.
         * @member {number} Amount
         * @memberof game.UserTransferInNtc
         * @instance
         */
        UserTransferInNtc.prototype.Amount = 0;

        /**
         * UserTransferInNtc CurrScore.
         * @member {number} CurrScore
         * @memberof game.UserTransferInNtc
         * @instance
         */
        UserTransferInNtc.prototype.CurrScore = 0;

        /**
         * Encodes the specified UserTransferInNtc message. Does not implicitly {@link game.UserTransferInNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserTransferInNtc
         * @static
         * @param {game.IUserTransferInNtc} m UserTransferInNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserTransferInNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(16).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(41).double(m.Amount);
            if (m.CurrScore != null && Object.hasOwnProperty.call(m, "CurrScore"))
                w.uint32(49).double(m.CurrScore);
            return w;
        };

        /**
         * Decodes a UserTransferInNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserTransferInNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserTransferInNtc} UserTransferInNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserTransferInNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserTransferInNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.UserID = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                case 5:
                    m.Amount = r.double();
                    break;
                case 6:
                    m.CurrScore = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserTransferInNtc;
    })();

    game.UserTransferOutNtc = (function() {

        /**
         * Properties of a UserTransferOutNtc.
         * @memberof game
         * @interface IUserTransferOutNtc
         * @property {game.ReturnCode|null} [Code] UserTransferOutNtc Code
         * @property {number|null} [UserID] UserTransferOutNtc UserID
         * @property {number|null} [RoomID] UserTransferOutNtc RoomID
         * @property {number|null} [TableID] UserTransferOutNtc TableID
         * @property {number|null} [Amount] UserTransferOutNtc Amount
         * @property {number|null} [CurrScore] UserTransferOutNtc CurrScore
         */

        /**
         * Constructs a new UserTransferOutNtc.
         * @memberof game
         * @classdesc Represents a UserTransferOutNtc.
         * @implements IUserTransferOutNtc
         * @constructor
         * @param {game.IUserTransferOutNtc=} [p] Properties to set
         */
        function UserTransferOutNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserTransferOutNtc Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserTransferOutNtc
         * @instance
         */
        UserTransferOutNtc.prototype.Code = 0;

        /**
         * UserTransferOutNtc UserID.
         * @member {number} UserID
         * @memberof game.UserTransferOutNtc
         * @instance
         */
        UserTransferOutNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserTransferOutNtc RoomID.
         * @member {number} RoomID
         * @memberof game.UserTransferOutNtc
         * @instance
         */
        UserTransferOutNtc.prototype.RoomID = 0;

        /**
         * UserTransferOutNtc TableID.
         * @member {number} TableID
         * @memberof game.UserTransferOutNtc
         * @instance
         */
        UserTransferOutNtc.prototype.TableID = 0;

        /**
         * UserTransferOutNtc Amount.
         * @member {number} Amount
         * @memberof game.UserTransferOutNtc
         * @instance
         */
        UserTransferOutNtc.prototype.Amount = 0;

        /**
         * UserTransferOutNtc CurrScore.
         * @member {number} CurrScore
         * @memberof game.UserTransferOutNtc
         * @instance
         */
        UserTransferOutNtc.prototype.CurrScore = 0;

        /**
         * Encodes the specified UserTransferOutNtc message. Does not implicitly {@link game.UserTransferOutNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserTransferOutNtc
         * @static
         * @param {game.IUserTransferOutNtc} m UserTransferOutNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserTransferOutNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(16).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(41).double(m.Amount);
            if (m.CurrScore != null && Object.hasOwnProperty.call(m, "CurrScore"))
                w.uint32(49).double(m.CurrScore);
            return w;
        };

        /**
         * Decodes a UserTransferOutNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserTransferOutNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserTransferOutNtc} UserTransferOutNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserTransferOutNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserTransferOutNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.UserID = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                case 5:
                    m.Amount = r.double();
                    break;
                case 6:
                    m.CurrScore = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserTransferOutNtc;
    })();

    game.UserFoldNtc = (function() {

        /**
         * Properties of a UserFoldNtc.
         * @memberof game
         * @interface IUserFoldNtc
         * @property {game.ReturnCode|null} [Code] UserFoldNtc Code
         * @property {number|null} [UserID] UserFoldNtc UserID
         * @property {number|null} [RoomID] UserFoldNtc RoomID
         * @property {number|null} [TableID] UserFoldNtc TableID
         */

        /**
         * Constructs a new UserFoldNtc.
         * @memberof game
         * @classdesc Represents a UserFoldNtc.
         * @implements IUserFoldNtc
         * @constructor
         * @param {game.IUserFoldNtc=} [p] Properties to set
         */
        function UserFoldNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserFoldNtc Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserFoldNtc
         * @instance
         */
        UserFoldNtc.prototype.Code = 0;

        /**
         * UserFoldNtc UserID.
         * @member {number} UserID
         * @memberof game.UserFoldNtc
         * @instance
         */
        UserFoldNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserFoldNtc RoomID.
         * @member {number} RoomID
         * @memberof game.UserFoldNtc
         * @instance
         */
        UserFoldNtc.prototype.RoomID = 0;

        /**
         * UserFoldNtc TableID.
         * @member {number} TableID
         * @memberof game.UserFoldNtc
         * @instance
         */
        UserFoldNtc.prototype.TableID = 0;

        /**
         * Encodes the specified UserFoldNtc message. Does not implicitly {@link game.UserFoldNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserFoldNtc
         * @static
         * @param {game.IUserFoldNtc} m UserFoldNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserFoldNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(16).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserFoldNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserFoldNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserFoldNtc} UserFoldNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserFoldNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserFoldNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.UserID = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserFoldNtc;
    })();

    game.UserBetNtc = (function() {

        /**
         * Properties of a UserBetNtc.
         * @memberof game
         * @interface IUserBetNtc
         * @property {game.ReturnCode|null} [Code] UserBetNtc Code
         * @property {number|null} [UserID] UserBetNtc UserID
         * @property {number|null} [RoomID] UserBetNtc RoomID
         * @property {number|null} [TableID] UserBetNtc TableID
         */

        /**
         * Constructs a new UserBetNtc.
         * @memberof game
         * @classdesc Represents a UserBetNtc.
         * @implements IUserBetNtc
         * @constructor
         * @param {game.IUserBetNtc=} [p] Properties to set
         */
        function UserBetNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserBetNtc Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserBetNtc
         * @instance
         */
        UserBetNtc.prototype.Code = 0;

        /**
         * UserBetNtc UserID.
         * @member {number} UserID
         * @memberof game.UserBetNtc
         * @instance
         */
        UserBetNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserBetNtc RoomID.
         * @member {number} RoomID
         * @memberof game.UserBetNtc
         * @instance
         */
        UserBetNtc.prototype.RoomID = 0;

        /**
         * UserBetNtc TableID.
         * @member {number} TableID
         * @memberof game.UserBetNtc
         * @instance
         */
        UserBetNtc.prototype.TableID = 0;

        /**
         * Encodes the specified UserBetNtc message. Does not implicitly {@link game.UserBetNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserBetNtc
         * @static
         * @param {game.IUserBetNtc} m UserBetNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserBetNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(16).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserBetNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserBetNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserBetNtc} UserBetNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserBetNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserBetNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.UserID = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserBetNtc;
    })();

    game.UserCallNtc = (function() {

        /**
         * Properties of a UserCallNtc.
         * @memberof game
         * @interface IUserCallNtc
         * @property {game.ReturnCode|null} [Code] UserCallNtc Code
         * @property {number|null} [UserID] UserCallNtc UserID
         * @property {number|null} [RoomID] UserCallNtc RoomID
         * @property {number|null} [TableID] UserCallNtc TableID
         */

        /**
         * Constructs a new UserCallNtc.
         * @memberof game
         * @classdesc Represents a UserCallNtc.
         * @implements IUserCallNtc
         * @constructor
         * @param {game.IUserCallNtc=} [p] Properties to set
         */
        function UserCallNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserCallNtc Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserCallNtc
         * @instance
         */
        UserCallNtc.prototype.Code = 0;

        /**
         * UserCallNtc UserID.
         * @member {number} UserID
         * @memberof game.UserCallNtc
         * @instance
         */
        UserCallNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserCallNtc RoomID.
         * @member {number} RoomID
         * @memberof game.UserCallNtc
         * @instance
         */
        UserCallNtc.prototype.RoomID = 0;

        /**
         * UserCallNtc TableID.
         * @member {number} TableID
         * @memberof game.UserCallNtc
         * @instance
         */
        UserCallNtc.prototype.TableID = 0;

        /**
         * Encodes the specified UserCallNtc message. Does not implicitly {@link game.UserCallNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserCallNtc
         * @static
         * @param {game.IUserCallNtc} m UserCallNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserCallNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(16).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserCallNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserCallNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserCallNtc} UserCallNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserCallNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserCallNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.UserID = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserCallNtc;
    })();

    game.UserRaiseNtc = (function() {

        /**
         * Properties of a UserRaiseNtc.
         * @memberof game
         * @interface IUserRaiseNtc
         * @property {game.ReturnCode|null} [Code] UserRaiseNtc Code
         * @property {number|null} [UserID] UserRaiseNtc UserID
         * @property {number|null} [RoomID] UserRaiseNtc RoomID
         * @property {number|null} [TableID] UserRaiseNtc TableID
         */

        /**
         * Constructs a new UserRaiseNtc.
         * @memberof game
         * @classdesc Represents a UserRaiseNtc.
         * @implements IUserRaiseNtc
         * @constructor
         * @param {game.IUserRaiseNtc=} [p] Properties to set
         */
        function UserRaiseNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserRaiseNtc Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserRaiseNtc
         * @instance
         */
        UserRaiseNtc.prototype.Code = 0;

        /**
         * UserRaiseNtc UserID.
         * @member {number} UserID
         * @memberof game.UserRaiseNtc
         * @instance
         */
        UserRaiseNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRaiseNtc RoomID.
         * @member {number} RoomID
         * @memberof game.UserRaiseNtc
         * @instance
         */
        UserRaiseNtc.prototype.RoomID = 0;

        /**
         * UserRaiseNtc TableID.
         * @member {number} TableID
         * @memberof game.UserRaiseNtc
         * @instance
         */
        UserRaiseNtc.prototype.TableID = 0;

        /**
         * Encodes the specified UserRaiseNtc message. Does not implicitly {@link game.UserRaiseNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserRaiseNtc
         * @static
         * @param {game.IUserRaiseNtc} m UserRaiseNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserRaiseNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(16).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserRaiseNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserRaiseNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserRaiseNtc} UserRaiseNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserRaiseNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserRaiseNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.UserID = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserRaiseNtc;
    })();

    game.UserAllInNtc = (function() {

        /**
         * Properties of a UserAllInNtc.
         * @memberof game
         * @interface IUserAllInNtc
         * @property {game.ReturnCode|null} [Code] UserAllInNtc Code
         * @property {number|null} [UserID] UserAllInNtc UserID
         * @property {number|null} [RoomID] UserAllInNtc RoomID
         * @property {number|null} [TableID] UserAllInNtc TableID
         */

        /**
         * Constructs a new UserAllInNtc.
         * @memberof game
         * @classdesc Represents a UserAllInNtc.
         * @implements IUserAllInNtc
         * @constructor
         * @param {game.IUserAllInNtc=} [p] Properties to set
         */
        function UserAllInNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserAllInNtc Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserAllInNtc
         * @instance
         */
        UserAllInNtc.prototype.Code = 0;

        /**
         * UserAllInNtc UserID.
         * @member {number} UserID
         * @memberof game.UserAllInNtc
         * @instance
         */
        UserAllInNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserAllInNtc RoomID.
         * @member {number} RoomID
         * @memberof game.UserAllInNtc
         * @instance
         */
        UserAllInNtc.prototype.RoomID = 0;

        /**
         * UserAllInNtc TableID.
         * @member {number} TableID
         * @memberof game.UserAllInNtc
         * @instance
         */
        UserAllInNtc.prototype.TableID = 0;

        /**
         * Encodes the specified UserAllInNtc message. Does not implicitly {@link game.UserAllInNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserAllInNtc
         * @static
         * @param {game.IUserAllInNtc} m UserAllInNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserAllInNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(16).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserAllInNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserAllInNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserAllInNtc} UserAllInNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserAllInNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserAllInNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.UserID = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserAllInNtc;
    })();

    game.UserCheckNtc = (function() {

        /**
         * Properties of a UserCheckNtc.
         * @memberof game
         * @interface IUserCheckNtc
         * @property {game.ReturnCode|null} [Code] UserCheckNtc Code
         * @property {number|null} [UserID] UserCheckNtc UserID
         * @property {number|null} [RoomID] UserCheckNtc RoomID
         * @property {number|null} [TableID] UserCheckNtc TableID
         */

        /**
         * Constructs a new UserCheckNtc.
         * @memberof game
         * @classdesc Represents a UserCheckNtc.
         * @implements IUserCheckNtc
         * @constructor
         * @param {game.IUserCheckNtc=} [p] Properties to set
         */
        function UserCheckNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserCheckNtc Code.
         * @member {game.ReturnCode} Code
         * @memberof game.UserCheckNtc
         * @instance
         */
        UserCheckNtc.prototype.Code = 0;

        /**
         * UserCheckNtc UserID.
         * @member {number} UserID
         * @memberof game.UserCheckNtc
         * @instance
         */
        UserCheckNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserCheckNtc RoomID.
         * @member {number} RoomID
         * @memberof game.UserCheckNtc
         * @instance
         */
        UserCheckNtc.prototype.RoomID = 0;

        /**
         * UserCheckNtc TableID.
         * @member {number} TableID
         * @memberof game.UserCheckNtc
         * @instance
         */
        UserCheckNtc.prototype.TableID = 0;

        /**
         * Encodes the specified UserCheckNtc message. Does not implicitly {@link game.UserCheckNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserCheckNtc
         * @static
         * @param {game.IUserCheckNtc} m UserCheckNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserCheckNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(16).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a UserCheckNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserCheckNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserCheckNtc} UserCheckNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserCheckNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserCheckNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.UserID = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserCheckNtc;
    })();

    game.JoinTableNtc = (function() {

        /**
         * Properties of a JoinTableNtc.
         * @memberof game
         * @interface IJoinTableNtc
         * @property {game.ReturnCode|null} [Code] JoinTableNtc Code
         * @property {game.IGameUser|null} [RoomUser] JoinTableNtc RoomUser
         */

        /**
         * Constructs a new JoinTableNtc.
         * @memberof game
         * @classdesc Represents a JoinTableNtc.
         * @implements IJoinTableNtc
         * @constructor
         * @param {game.IJoinTableNtc=} [p] Properties to set
         */
        function JoinTableNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * JoinTableNtc Code.
         * @member {game.ReturnCode} Code
         * @memberof game.JoinTableNtc
         * @instance
         */
        JoinTableNtc.prototype.Code = 0;

        /**
         * JoinTableNtc RoomUser.
         * @member {game.IGameUser|null|undefined} RoomUser
         * @memberof game.JoinTableNtc
         * @instance
         */
        JoinTableNtc.prototype.RoomUser = null;

        /**
         * Encodes the specified JoinTableNtc message. Does not implicitly {@link game.JoinTableNtc.verify|verify} messages.
         * @function encode
         * @memberof game.JoinTableNtc
         * @static
         * @param {game.IJoinTableNtc} m JoinTableNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        JoinTableNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.RoomUser != null && Object.hasOwnProperty.call(m, "RoomUser"))
                $root.game.GameUser.encode(m.RoomUser, w.uint32(18).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a JoinTableNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.JoinTableNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.JoinTableNtc} JoinTableNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.JoinTableNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.RoomUser = $root.game.GameUser.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return JoinTableNtc;
    })();

    game.LeaveTableNtc = (function() {

        /**
         * Properties of a LeaveTableNtc.
         * @memberof game
         * @interface ILeaveTableNtc
         * @property {game.ReturnCode|null} [Code] LeaveTableNtc Code
         * @property {number|null} [UserID] LeaveTableNtc UserID
         * @property {number|null} [RoomID] LeaveTableNtc RoomID
         * @property {number|null} [TableID] LeaveTableNtc TableID
         * @property {number|null} [Balance] LeaveTableNtc Balance
         */

        /**
         * Constructs a new LeaveTableNtc.
         * @memberof game
         * @classdesc Represents a LeaveTableNtc.
         * @implements ILeaveTableNtc
         * @constructor
         * @param {game.ILeaveTableNtc=} [p] Properties to set
         */
        function LeaveTableNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LeaveTableNtc Code.
         * @member {game.ReturnCode} Code
         * @memberof game.LeaveTableNtc
         * @instance
         */
        LeaveTableNtc.prototype.Code = 0;

        /**
         * LeaveTableNtc UserID.
         * @member {number} UserID
         * @memberof game.LeaveTableNtc
         * @instance
         */
        LeaveTableNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LeaveTableNtc RoomID.
         * @member {number} RoomID
         * @memberof game.LeaveTableNtc
         * @instance
         */
        LeaveTableNtc.prototype.RoomID = 0;

        /**
         * LeaveTableNtc TableID.
         * @member {number} TableID
         * @memberof game.LeaveTableNtc
         * @instance
         */
        LeaveTableNtc.prototype.TableID = 0;

        /**
         * LeaveTableNtc Balance.
         * @member {number} Balance
         * @memberof game.LeaveTableNtc
         * @instance
         */
        LeaveTableNtc.prototype.Balance = 0;

        /**
         * Encodes the specified LeaveTableNtc message. Does not implicitly {@link game.LeaveTableNtc.verify|verify} messages.
         * @function encode
         * @memberof game.LeaveTableNtc
         * @static
         * @param {game.ILeaveTableNtc} m LeaveTableNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        LeaveTableNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(16).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            if (m.Balance != null && Object.hasOwnProperty.call(m, "Balance"))
                w.uint32(41).double(m.Balance);
            return w;
        };

        /**
         * Decodes a LeaveTableNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.LeaveTableNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.LeaveTableNtc} LeaveTableNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveTableNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.LeaveTableNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.UserID = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                case 5:
                    m.Balance = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LeaveTableNtc;
    })();

    game.UserAssetsChangeNtc = (function() {

        /**
         * Properties of a UserAssetsChangeNtc.
         * @memberof game
         * @interface IUserAssetsChangeNtc
         * @property {number|null} [UserID] UserAssetsChangeNtc UserID
         * @property {number|null} [RoomID] UserAssetsChangeNtc RoomID
         * @property {number|null} [TableID] UserAssetsChangeNtc TableID
         * @property {number|null} [ChairID] UserAssetsChangeNtc ChairID
         * @property {number|null} [CurrScore] UserAssetsChangeNtc CurrScore
         */

        /**
         * Constructs a new UserAssetsChangeNtc.
         * @memberof game
         * @classdesc Represents a UserAssetsChangeNtc.
         * @implements IUserAssetsChangeNtc
         * @constructor
         * @param {game.IUserAssetsChangeNtc=} [p] Properties to set
         */
        function UserAssetsChangeNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserAssetsChangeNtc UserID.
         * @member {number} UserID
         * @memberof game.UserAssetsChangeNtc
         * @instance
         */
        UserAssetsChangeNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserAssetsChangeNtc RoomID.
         * @member {number} RoomID
         * @memberof game.UserAssetsChangeNtc
         * @instance
         */
        UserAssetsChangeNtc.prototype.RoomID = 0;

        /**
         * UserAssetsChangeNtc TableID.
         * @member {number} TableID
         * @memberof game.UserAssetsChangeNtc
         * @instance
         */
        UserAssetsChangeNtc.prototype.TableID = 0;

        /**
         * UserAssetsChangeNtc ChairID.
         * @member {number} ChairID
         * @memberof game.UserAssetsChangeNtc
         * @instance
         */
        UserAssetsChangeNtc.prototype.ChairID = 0;

        /**
         * UserAssetsChangeNtc CurrScore.
         * @member {number} CurrScore
         * @memberof game.UserAssetsChangeNtc
         * @instance
         */
        UserAssetsChangeNtc.prototype.CurrScore = 0;

        /**
         * Encodes the specified UserAssetsChangeNtc message. Does not implicitly {@link game.UserAssetsChangeNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserAssetsChangeNtc
         * @static
         * @param {game.IUserAssetsChangeNtc} m UserAssetsChangeNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserAssetsChangeNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(8).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(16).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(24).int32(m.TableID);
            if (m.ChairID != null && Object.hasOwnProperty.call(m, "ChairID"))
                w.uint32(32).int32(m.ChairID);
            if (m.CurrScore != null && Object.hasOwnProperty.call(m, "CurrScore"))
                w.uint32(41).double(m.CurrScore);
            return w;
        };

        /**
         * Decodes a UserAssetsChangeNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserAssetsChangeNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserAssetsChangeNtc} UserAssetsChangeNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserAssetsChangeNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserAssetsChangeNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UserID = r.int64();
                    break;
                case 2:
                    m.RoomID = r.int32();
                    break;
                case 3:
                    m.TableID = r.int32();
                    break;
                case 4:
                    m.ChairID = r.int32();
                    break;
                case 5:
                    m.CurrScore = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserAssetsChangeNtc;
    })();

    game.GameCountdownNtc = (function() {

        /**
         * Properties of a GameCountdownNtc.
         * @memberof game
         * @interface IGameCountdownNtc
         * @property {number|null} [RoomID] GameCountdownNtc RoomID
         * @property {number|null} [TableID] GameCountdownNtc TableID
         * @property {number|null} [Countdown] GameCountdownNtc Countdown
         */

        /**
         * Constructs a new GameCountdownNtc.
         * @memberof game
         * @classdesc Represents a GameCountdownNtc.
         * @implements IGameCountdownNtc
         * @constructor
         * @param {game.IGameCountdownNtc=} [p] Properties to set
         */
        function GameCountdownNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameCountdownNtc RoomID.
         * @member {number} RoomID
         * @memberof game.GameCountdownNtc
         * @instance
         */
        GameCountdownNtc.prototype.RoomID = 0;

        /**
         * GameCountdownNtc TableID.
         * @member {number} TableID
         * @memberof game.GameCountdownNtc
         * @instance
         */
        GameCountdownNtc.prototype.TableID = 0;

        /**
         * GameCountdownNtc Countdown.
         * @member {number} Countdown
         * @memberof game.GameCountdownNtc
         * @instance
         */
        GameCountdownNtc.prototype.Countdown = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified GameCountdownNtc message. Does not implicitly {@link game.GameCountdownNtc.verify|verify} messages.
         * @function encode
         * @memberof game.GameCountdownNtc
         * @static
         * @param {game.IGameCountdownNtc} m GameCountdownNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GameCountdownNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            if (m.Countdown != null && Object.hasOwnProperty.call(m, "Countdown"))
                w.uint32(24).int64(m.Countdown);
            return w;
        };

        /**
         * Decodes a GameCountdownNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameCountdownNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.GameCountdownNtc} GameCountdownNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GameCountdownNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.GameCountdownNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                case 3:
                    m.Countdown = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameCountdownNtc;
    })();

    game.GameStartNtc = (function() {

        /**
         * Properties of a GameStartNtc.
         * @memberof game
         * @interface IGameStartNtc
         * @property {number|null} [RoomID] GameStartNtc RoomID
         * @property {number|null} [TableID] GameStartNtc TableID
         * @property {number|null} [ButtonChairID] GameStartNtc ButtonChairID
         * @property {number|null} [SmallBlindChairID] GameStartNtc SmallBlindChairID
         * @property {number|null} [BigBlindChairID] GameStartNtc BigBlindChairID
         * @property {number|null} [SmallBlindAmount] GameStartNtc SmallBlindAmount
         * @property {number|null} [BigBlindAmount] GameStartNtc BigBlindAmount
         * @property {Array.<number>|null} [UserIds] GameStartNtc UserIds
         * @property {game.GameState|null} [GameState] GameStartNtc GameState
         */

        /**
         * Constructs a new GameStartNtc.
         * @memberof game
         * @classdesc Represents a GameStartNtc.
         * @implements IGameStartNtc
         * @constructor
         * @param {game.IGameStartNtc=} [p] Properties to set
         */
        function GameStartNtc(p) {
            this.UserIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameStartNtc RoomID.
         * @member {number} RoomID
         * @memberof game.GameStartNtc
         * @instance
         */
        GameStartNtc.prototype.RoomID = 0;

        /**
         * GameStartNtc TableID.
         * @member {number} TableID
         * @memberof game.GameStartNtc
         * @instance
         */
        GameStartNtc.prototype.TableID = 0;

        /**
         * GameStartNtc ButtonChairID.
         * @member {number} ButtonChairID
         * @memberof game.GameStartNtc
         * @instance
         */
        GameStartNtc.prototype.ButtonChairID = 0;

        /**
         * GameStartNtc SmallBlindChairID.
         * @member {number} SmallBlindChairID
         * @memberof game.GameStartNtc
         * @instance
         */
        GameStartNtc.prototype.SmallBlindChairID = 0;

        /**
         * GameStartNtc BigBlindChairID.
         * @member {number} BigBlindChairID
         * @memberof game.GameStartNtc
         * @instance
         */
        GameStartNtc.prototype.BigBlindChairID = 0;

        /**
         * GameStartNtc SmallBlindAmount.
         * @member {number} SmallBlindAmount
         * @memberof game.GameStartNtc
         * @instance
         */
        GameStartNtc.prototype.SmallBlindAmount = 0;

        /**
         * GameStartNtc BigBlindAmount.
         * @member {number} BigBlindAmount
         * @memberof game.GameStartNtc
         * @instance
         */
        GameStartNtc.prototype.BigBlindAmount = 0;

        /**
         * GameStartNtc UserIds.
         * @member {Array.<number>} UserIds
         * @memberof game.GameStartNtc
         * @instance
         */
        GameStartNtc.prototype.UserIds = $util.emptyArray;

        /**
         * GameStartNtc GameState.
         * @member {game.GameState} GameState
         * @memberof game.GameStartNtc
         * @instance
         */
        GameStartNtc.prototype.GameState = 0;

        /**
         * Encodes the specified GameStartNtc message. Does not implicitly {@link game.GameStartNtc.verify|verify} messages.
         * @function encode
         * @memberof game.GameStartNtc
         * @static
         * @param {game.IGameStartNtc} m GameStartNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GameStartNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            if (m.ButtonChairID != null && Object.hasOwnProperty.call(m, "ButtonChairID"))
                w.uint32(24).int32(m.ButtonChairID);
            if (m.SmallBlindChairID != null && Object.hasOwnProperty.call(m, "SmallBlindChairID"))
                w.uint32(32).int32(m.SmallBlindChairID);
            if (m.BigBlindChairID != null && Object.hasOwnProperty.call(m, "BigBlindChairID"))
                w.uint32(40).int32(m.BigBlindChairID);
            if (m.SmallBlindAmount != null && Object.hasOwnProperty.call(m, "SmallBlindAmount"))
                w.uint32(49).double(m.SmallBlindAmount);
            if (m.BigBlindAmount != null && Object.hasOwnProperty.call(m, "BigBlindAmount"))
                w.uint32(57).double(m.BigBlindAmount);
            if (m.UserIds != null && m.UserIds.length) {
                w.uint32(66).fork();
                for (var i = 0; i < m.UserIds.length; ++i)
                    w.int64(m.UserIds[i]);
                w.ldelim();
            }
            if (m.GameState != null && Object.hasOwnProperty.call(m, "GameState"))
                w.uint32(72).int32(m.GameState);
            return w;
        };

        /**
         * Decodes a GameStartNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameStartNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.GameStartNtc} GameStartNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GameStartNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.GameStartNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                case 3:
                    m.ButtonChairID = r.int32();
                    break;
                case 4:
                    m.SmallBlindChairID = r.int32();
                    break;
                case 5:
                    m.BigBlindChairID = r.int32();
                    break;
                case 6:
                    m.SmallBlindAmount = r.double();
                    break;
                case 7:
                    m.BigBlindAmount = r.double();
                    break;
                case 8:
                    if (!(m.UserIds && m.UserIds.length))
                        m.UserIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.UserIds.push(r.int64());
                    } else
                        m.UserIds.push(r.int64());
                    break;
                case 9:
                    m.GameState = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameStartNtc;
    })();

    game.GameRoundStartNtc = (function() {

        /**
         * Properties of a GameRoundStartNtc.
         * @memberof game
         * @interface IGameRoundStartNtc
         * @property {number|null} [RoomID] GameRoundStartNtc RoomID
         * @property {number|null} [TableID] GameRoundStartNtc TableID
         * @property {game.GameRound|null} [GameRound] GameRoundStartNtc GameRound
         */

        /**
         * Constructs a new GameRoundStartNtc.
         * @memberof game
         * @classdesc Represents a GameRoundStartNtc.
         * @implements IGameRoundStartNtc
         * @constructor
         * @param {game.IGameRoundStartNtc=} [p] Properties to set
         */
        function GameRoundStartNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameRoundStartNtc RoomID.
         * @member {number} RoomID
         * @memberof game.GameRoundStartNtc
         * @instance
         */
        GameRoundStartNtc.prototype.RoomID = 0;

        /**
         * GameRoundStartNtc TableID.
         * @member {number} TableID
         * @memberof game.GameRoundStartNtc
         * @instance
         */
        GameRoundStartNtc.prototype.TableID = 0;

        /**
         * GameRoundStartNtc GameRound.
         * @member {game.GameRound} GameRound
         * @memberof game.GameRoundStartNtc
         * @instance
         */
        GameRoundStartNtc.prototype.GameRound = 0;

        /**
         * Encodes the specified GameRoundStartNtc message. Does not implicitly {@link game.GameRoundStartNtc.verify|verify} messages.
         * @function encode
         * @memberof game.GameRoundStartNtc
         * @static
         * @param {game.IGameRoundStartNtc} m GameRoundStartNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GameRoundStartNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            if (m.GameRound != null && Object.hasOwnProperty.call(m, "GameRound"))
                w.uint32(24).int32(m.GameRound);
            return w;
        };

        /**
         * Decodes a GameRoundStartNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameRoundStartNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.GameRoundStartNtc} GameRoundStartNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GameRoundStartNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.GameRoundStartNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                case 3:
                    m.GameRound = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameRoundStartNtc;
    })();

    game.UserTurnStartNtc = (function() {

        /**
         * Properties of a UserTurnStartNtc.
         * @memberof game
         * @interface IUserTurnStartNtc
         * @property {number|null} [UserID] UserTurnStartNtc UserID
         * @property {number|null} [UserScore] UserTurnStartNtc UserScore
         * @property {number|null} [RoomID] UserTurnStartNtc RoomID
         * @property {number|null} [TableID] UserTurnStartNtc TableID
         * @property {number|null} [ChairID] UserTurnStartNtc ChairID
         * @property {number|null} [BetMinAmount] UserTurnStartNtc BetMinAmount
         * @property {number|null} [CallAmount] UserTurnStartNtc CallAmount
         * @property {number|null} [RaiseMinAmount] UserTurnStartNtc RaiseMinAmount
         * @property {Array.<game.UserActionKind>|null} [currValidActions] UserTurnStartNtc currValidActions
         * @property {number|null} [StepNumber] UserTurnStartNtc StepNumber
         * @property {number|null} [Countdown] UserTurnStartNtc Countdown
         */

        /**
         * Constructs a new UserTurnStartNtc.
         * @memberof game
         * @classdesc Represents a UserTurnStartNtc.
         * @implements IUserTurnStartNtc
         * @constructor
         * @param {game.IUserTurnStartNtc=} [p] Properties to set
         */
        function UserTurnStartNtc(p) {
            this.currValidActions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserTurnStartNtc UserID.
         * @member {number} UserID
         * @memberof game.UserTurnStartNtc
         * @instance
         */
        UserTurnStartNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserTurnStartNtc UserScore.
         * @member {number} UserScore
         * @memberof game.UserTurnStartNtc
         * @instance
         */
        UserTurnStartNtc.prototype.UserScore = 0;

        /**
         * UserTurnStartNtc RoomID.
         * @member {number} RoomID
         * @memberof game.UserTurnStartNtc
         * @instance
         */
        UserTurnStartNtc.prototype.RoomID = 0;

        /**
         * UserTurnStartNtc TableID.
         * @member {number} TableID
         * @memberof game.UserTurnStartNtc
         * @instance
         */
        UserTurnStartNtc.prototype.TableID = 0;

        /**
         * UserTurnStartNtc ChairID.
         * @member {number} ChairID
         * @memberof game.UserTurnStartNtc
         * @instance
         */
        UserTurnStartNtc.prototype.ChairID = 0;

        /**
         * UserTurnStartNtc BetMinAmount.
         * @member {number} BetMinAmount
         * @memberof game.UserTurnStartNtc
         * @instance
         */
        UserTurnStartNtc.prototype.BetMinAmount = 0;

        /**
         * UserTurnStartNtc CallAmount.
         * @member {number} CallAmount
         * @memberof game.UserTurnStartNtc
         * @instance
         */
        UserTurnStartNtc.prototype.CallAmount = 0;

        /**
         * UserTurnStartNtc RaiseMinAmount.
         * @member {number} RaiseMinAmount
         * @memberof game.UserTurnStartNtc
         * @instance
         */
        UserTurnStartNtc.prototype.RaiseMinAmount = 0;

        /**
         * UserTurnStartNtc currValidActions.
         * @member {Array.<game.UserActionKind>} currValidActions
         * @memberof game.UserTurnStartNtc
         * @instance
         */
        UserTurnStartNtc.prototype.currValidActions = $util.emptyArray;

        /**
         * UserTurnStartNtc StepNumber.
         * @member {number} StepNumber
         * @memberof game.UserTurnStartNtc
         * @instance
         */
        UserTurnStartNtc.prototype.StepNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserTurnStartNtc Countdown.
         * @member {number} Countdown
         * @memberof game.UserTurnStartNtc
         * @instance
         */
        UserTurnStartNtc.prototype.Countdown = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified UserTurnStartNtc message. Does not implicitly {@link game.UserTurnStartNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserTurnStartNtc
         * @static
         * @param {game.IUserTurnStartNtc} m UserTurnStartNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserTurnStartNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(8).int64(m.UserID);
            if (m.UserScore != null && Object.hasOwnProperty.call(m, "UserScore"))
                w.uint32(17).double(m.UserScore);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            if (m.ChairID != null && Object.hasOwnProperty.call(m, "ChairID"))
                w.uint32(40).int32(m.ChairID);
            if (m.BetMinAmount != null && Object.hasOwnProperty.call(m, "BetMinAmount"))
                w.uint32(49).double(m.BetMinAmount);
            if (m.CallAmount != null && Object.hasOwnProperty.call(m, "CallAmount"))
                w.uint32(57).double(m.CallAmount);
            if (m.RaiseMinAmount != null && Object.hasOwnProperty.call(m, "RaiseMinAmount"))
                w.uint32(65).double(m.RaiseMinAmount);
            if (m.currValidActions != null && m.currValidActions.length) {
                w.uint32(74).fork();
                for (var i = 0; i < m.currValidActions.length; ++i)
                    w.int32(m.currValidActions[i]);
                w.ldelim();
            }
            if (m.StepNumber != null && Object.hasOwnProperty.call(m, "StepNumber"))
                w.uint32(80).int64(m.StepNumber);
            if (m.Countdown != null && Object.hasOwnProperty.call(m, "Countdown"))
                w.uint32(88).int64(m.Countdown);
            return w;
        };

        /**
         * Decodes a UserTurnStartNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserTurnStartNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserTurnStartNtc} UserTurnStartNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserTurnStartNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserTurnStartNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UserID = r.int64();
                    break;
                case 2:
                    m.UserScore = r.double();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                case 5:
                    m.ChairID = r.int32();
                    break;
                case 6:
                    m.BetMinAmount = r.double();
                    break;
                case 7:
                    m.CallAmount = r.double();
                    break;
                case 8:
                    m.RaiseMinAmount = r.double();
                    break;
                case 9:
                    if (!(m.currValidActions && m.currValidActions.length))
                        m.currValidActions = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.currValidActions.push(r.int32());
                    } else
                        m.currValidActions.push(r.int32());
                    break;
                case 10:
                    m.StepNumber = r.int64();
                    break;
                case 11:
                    m.Countdown = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserTurnStartNtc;
    })();

    game.UserActionNtc = (function() {

        /**
         * Properties of a UserActionNtc.
         * @memberof game
         * @interface IUserActionNtc
         * @property {number|null} [UserID] UserActionNtc UserID
         * @property {number|null} [RoomID] UserActionNtc RoomID
         * @property {number|null} [TableID] UserActionNtc TableID
         * @property {number|null} [ChairID] UserActionNtc ChairID
         * @property {game.UserActionKind|null} [UserAction] UserActionNtc UserAction
         * @property {number|null} [Amount] UserActionNtc Amount
         * @property {number|null} [CurrScore] UserActionNtc CurrScore
         * @property {number|null} [RoundBetAmount] UserActionNtc RoundBetAmount
         * @property {Uint8Array|null} [HoldCards] UserActionNtc HoldCards
         */

        /**
         * Constructs a new UserActionNtc.
         * @memberof game
         * @classdesc Represents a UserActionNtc.
         * @implements IUserActionNtc
         * @constructor
         * @param {game.IUserActionNtc=} [p] Properties to set
         */
        function UserActionNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserActionNtc UserID.
         * @member {number} UserID
         * @memberof game.UserActionNtc
         * @instance
         */
        UserActionNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserActionNtc RoomID.
         * @member {number} RoomID
         * @memberof game.UserActionNtc
         * @instance
         */
        UserActionNtc.prototype.RoomID = 0;

        /**
         * UserActionNtc TableID.
         * @member {number} TableID
         * @memberof game.UserActionNtc
         * @instance
         */
        UserActionNtc.prototype.TableID = 0;

        /**
         * UserActionNtc ChairID.
         * @member {number} ChairID
         * @memberof game.UserActionNtc
         * @instance
         */
        UserActionNtc.prototype.ChairID = 0;

        /**
         * UserActionNtc UserAction.
         * @member {game.UserActionKind} UserAction
         * @memberof game.UserActionNtc
         * @instance
         */
        UserActionNtc.prototype.UserAction = 0;

        /**
         * UserActionNtc Amount.
         * @member {number} Amount
         * @memberof game.UserActionNtc
         * @instance
         */
        UserActionNtc.prototype.Amount = 0;

        /**
         * UserActionNtc CurrScore.
         * @member {number} CurrScore
         * @memberof game.UserActionNtc
         * @instance
         */
        UserActionNtc.prototype.CurrScore = 0;

        /**
         * UserActionNtc RoundBetAmount.
         * @member {number} RoundBetAmount
         * @memberof game.UserActionNtc
         * @instance
         */
        UserActionNtc.prototype.RoundBetAmount = 0;

        /**
         * UserActionNtc HoldCards.
         * @member {Uint8Array} HoldCards
         * @memberof game.UserActionNtc
         * @instance
         */
        UserActionNtc.prototype.HoldCards = $util.newBuffer([]);

        /**
         * Encodes the specified UserActionNtc message. Does not implicitly {@link game.UserActionNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserActionNtc
         * @static
         * @param {game.IUserActionNtc} m UserActionNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserActionNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(8).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(16).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(24).int32(m.TableID);
            if (m.ChairID != null && Object.hasOwnProperty.call(m, "ChairID"))
                w.uint32(32).int32(m.ChairID);
            if (m.UserAction != null && Object.hasOwnProperty.call(m, "UserAction"))
                w.uint32(40).int32(m.UserAction);
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(49).double(m.Amount);
            if (m.CurrScore != null && Object.hasOwnProperty.call(m, "CurrScore"))
                w.uint32(57).double(m.CurrScore);
            if (m.RoundBetAmount != null && Object.hasOwnProperty.call(m, "RoundBetAmount"))
                w.uint32(65).double(m.RoundBetAmount);
            if (m.HoldCards != null && Object.hasOwnProperty.call(m, "HoldCards"))
                w.uint32(74).bytes(m.HoldCards);
            return w;
        };

        /**
         * Decodes a UserActionNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserActionNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserActionNtc} UserActionNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserActionNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserActionNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UserID = r.int64();
                    break;
                case 2:
                    m.RoomID = r.int32();
                    break;
                case 3:
                    m.TableID = r.int32();
                    break;
                case 4:
                    m.ChairID = r.int32();
                    break;
                case 5:
                    m.UserAction = r.int32();
                    break;
                case 6:
                    m.Amount = r.double();
                    break;
                case 7:
                    m.CurrScore = r.double();
                    break;
                case 8:
                    m.RoundBetAmount = r.double();
                    break;
                case 9:
                    m.HoldCards = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserActionNtc;
    })();

    game.DealHoleCardsNtc = (function() {

        /**
         * Properties of a DealHoleCardsNtc.
         * @memberof game
         * @interface IDealHoleCardsNtc
         * @property {number|null} [RoomID] DealHoleCardsNtc RoomID
         * @property {number|null} [TableID] DealHoleCardsNtc TableID
         */

        /**
         * Constructs a new DealHoleCardsNtc.
         * @memberof game
         * @classdesc Represents a DealHoleCardsNtc.
         * @implements IDealHoleCardsNtc
         * @constructor
         * @param {game.IDealHoleCardsNtc=} [p] Properties to set
         */
        function DealHoleCardsNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * DealHoleCardsNtc RoomID.
         * @member {number} RoomID
         * @memberof game.DealHoleCardsNtc
         * @instance
         */
        DealHoleCardsNtc.prototype.RoomID = 0;

        /**
         * DealHoleCardsNtc TableID.
         * @member {number} TableID
         * @memberof game.DealHoleCardsNtc
         * @instance
         */
        DealHoleCardsNtc.prototype.TableID = 0;

        /**
         * Encodes the specified DealHoleCardsNtc message. Does not implicitly {@link game.DealHoleCardsNtc.verify|verify} messages.
         * @function encode
         * @memberof game.DealHoleCardsNtc
         * @static
         * @param {game.IDealHoleCardsNtc} m DealHoleCardsNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        DealHoleCardsNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            return w;
        };

        /**
         * Decodes a DealHoleCardsNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.DealHoleCardsNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.DealHoleCardsNtc} DealHoleCardsNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        DealHoleCardsNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.DealHoleCardsNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DealHoleCardsNtc;
    })();

    game.UserDealHoleCardsNtc = (function() {

        /**
         * Properties of a UserDealHoleCardsNtc.
         * @memberof game
         * @interface IUserDealHoleCardsNtc
         * @property {number|null} [UserID] UserDealHoleCardsNtc UserID
         * @property {number|null} [RoomID] UserDealHoleCardsNtc RoomID
         * @property {number|null} [TableID] UserDealHoleCardsNtc TableID
         * @property {Uint8Array|null} [HoldCards] UserDealHoleCardsNtc HoldCards
         */

        /**
         * Constructs a new UserDealHoleCardsNtc.
         * @memberof game
         * @classdesc Represents a UserDealHoleCardsNtc.
         * @implements IUserDealHoleCardsNtc
         * @constructor
         * @param {game.IUserDealHoleCardsNtc=} [p] Properties to set
         */
        function UserDealHoleCardsNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserDealHoleCardsNtc UserID.
         * @member {number} UserID
         * @memberof game.UserDealHoleCardsNtc
         * @instance
         */
        UserDealHoleCardsNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserDealHoleCardsNtc RoomID.
         * @member {number} RoomID
         * @memberof game.UserDealHoleCardsNtc
         * @instance
         */
        UserDealHoleCardsNtc.prototype.RoomID = 0;

        /**
         * UserDealHoleCardsNtc TableID.
         * @member {number} TableID
         * @memberof game.UserDealHoleCardsNtc
         * @instance
         */
        UserDealHoleCardsNtc.prototype.TableID = 0;

        /**
         * UserDealHoleCardsNtc HoldCards.
         * @member {Uint8Array} HoldCards
         * @memberof game.UserDealHoleCardsNtc
         * @instance
         */
        UserDealHoleCardsNtc.prototype.HoldCards = $util.newBuffer([]);

        /**
         * Encodes the specified UserDealHoleCardsNtc message. Does not implicitly {@link game.UserDealHoleCardsNtc.verify|verify} messages.
         * @function encode
         * @memberof game.UserDealHoleCardsNtc
         * @static
         * @param {game.IUserDealHoleCardsNtc} m UserDealHoleCardsNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserDealHoleCardsNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(8).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(16).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(24).int32(m.TableID);
            if (m.HoldCards != null && Object.hasOwnProperty.call(m, "HoldCards"))
                w.uint32(34).bytes(m.HoldCards);
            return w;
        };

        /**
         * Decodes a UserDealHoleCardsNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserDealHoleCardsNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserDealHoleCardsNtc} UserDealHoleCardsNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserDealHoleCardsNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserDealHoleCardsNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UserID = r.int64();
                    break;
                case 2:
                    m.RoomID = r.int32();
                    break;
                case 3:
                    m.TableID = r.int32();
                    break;
                case 4:
                    m.HoldCards = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserDealHoleCardsNtc;
    })();

    game.DealCommunityCardsNtc = (function() {

        /**
         * Properties of a DealCommunityCardsNtc.
         * @memberof game
         * @interface IDealCommunityCardsNtc
         * @property {number|null} [RoomID] DealCommunityCardsNtc RoomID
         * @property {number|null} [TableID] DealCommunityCardsNtc TableID
         * @property {Uint8Array|null} [CommunityCards] DealCommunityCardsNtc CommunityCards
         */

        /**
         * Constructs a new DealCommunityCardsNtc.
         * @memberof game
         * @classdesc Represents a DealCommunityCardsNtc.
         * @implements IDealCommunityCardsNtc
         * @constructor
         * @param {game.IDealCommunityCardsNtc=} [p] Properties to set
         */
        function DealCommunityCardsNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * DealCommunityCardsNtc RoomID.
         * @member {number} RoomID
         * @memberof game.DealCommunityCardsNtc
         * @instance
         */
        DealCommunityCardsNtc.prototype.RoomID = 0;

        /**
         * DealCommunityCardsNtc TableID.
         * @member {number} TableID
         * @memberof game.DealCommunityCardsNtc
         * @instance
         */
        DealCommunityCardsNtc.prototype.TableID = 0;

        /**
         * DealCommunityCardsNtc CommunityCards.
         * @member {Uint8Array} CommunityCards
         * @memberof game.DealCommunityCardsNtc
         * @instance
         */
        DealCommunityCardsNtc.prototype.CommunityCards = $util.newBuffer([]);

        /**
         * Encodes the specified DealCommunityCardsNtc message. Does not implicitly {@link game.DealCommunityCardsNtc.verify|verify} messages.
         * @function encode
         * @memberof game.DealCommunityCardsNtc
         * @static
         * @param {game.IDealCommunityCardsNtc} m DealCommunityCardsNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        DealCommunityCardsNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            if (m.CommunityCards != null && Object.hasOwnProperty.call(m, "CommunityCards"))
                w.uint32(26).bytes(m.CommunityCards);
            return w;
        };

        /**
         * Decodes a DealCommunityCardsNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.DealCommunityCardsNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.DealCommunityCardsNtc} DealCommunityCardsNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        DealCommunityCardsNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.DealCommunityCardsNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                case 3:
                    m.CommunityCards = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DealCommunityCardsNtc;
    })();

    game.GetGameSceneNtc = (function() {

        /**
         * Properties of a GetGameSceneNtc.
         * @memberof game
         * @interface IGetGameSceneNtc
         * @property {game.ReturnCode|null} [Code] GetGameSceneNtc Code
         * @property {number|null} [UserID] GetGameSceneNtc UserID
         * @property {number|null} [RoomID] GetGameSceneNtc RoomID
         * @property {number|null} [TableID] GetGameSceneNtc TableID
         * @property {game.GameState|null} [GameState] GetGameSceneNtc GameState
         * @property {number|null} [CurrScore] GetGameSceneNtc CurrScore
         * @property {number|null} [MinTransferIn] GetGameSceneNtc MinTransferIn
         * @property {number|null} [MaxTransferIn] GetGameSceneNtc MaxTransferIn
         * @property {Array.<game.IGameUser>|null} [TableUsers] GetGameSceneNtc TableUsers
         * @property {Array.<number>|null} [FreeCharis] GetGameSceneNtc FreeCharis
         * @property {Array.<game.IGameUser>|null} [AudienceUsers] GetGameSceneNtc AudienceUsers
         * @property {game.GameRound|null} [GameRound] GetGameSceneNtc GameRound
         * @property {Array.<number>|null} [UserIDs] GetGameSceneNtc UserIDs
         * @property {Uint8Array|null} [HoldCards] GetGameSceneNtc HoldCards
         * @property {Uint8Array|null} [CommunityCards] GetGameSceneNtc CommunityCards
         * @property {game.IUserTurnStartNtc|null} [UserTurn] GetGameSceneNtc UserTurn
         * @property {Array.<game.IUserActionNtc>|null} [PreFlopActionList] GetGameSceneNtc PreFlopActionList
         * @property {Array.<game.IUserActionNtc>|null} [FlopActionList] GetGameSceneNtc FlopActionList
         * @property {Array.<game.IUserActionNtc>|null} [TurnActionList] GetGameSceneNtc TurnActionList
         * @property {Array.<game.IUserActionNtc>|null} [RiverActionList] GetGameSceneNtc RiverActionList
         * @property {number|null} [ButtonChairID] GetGameSceneNtc ButtonChairID
         * @property {number|null} [SmallBlindAmount] GetGameSceneNtc SmallBlindAmount
         * @property {number|null} [BigBlindAmount] GetGameSceneNtc BigBlindAmount
         * @property {Array.<game.IPotInfo>|null} [PotInfos] GetGameSceneNtc PotInfos
         * @property {number|null} [GameID] GetGameSceneNtc GameID
         * @property {string|null} [RoomName] GetGameSceneNtc RoomName
         * @property {number|null} [EnterAmount] GetGameSceneNtc EnterAmount
         * @property {number|null} [TransferFees] GetGameSceneNtc TransferFees
         */

        /**
         * Constructs a new GetGameSceneNtc.
         * @memberof game
         * @classdesc Represents a GetGameSceneNtc.
         * @implements IGetGameSceneNtc
         * @constructor
         * @param {game.IGetGameSceneNtc=} [p] Properties to set
         */
        function GetGameSceneNtc(p) {
            this.TableUsers = [];
            this.FreeCharis = [];
            this.AudienceUsers = [];
            this.UserIDs = [];
            this.PreFlopActionList = [];
            this.FlopActionList = [];
            this.TurnActionList = [];
            this.RiverActionList = [];
            this.PotInfos = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GetGameSceneNtc Code.
         * @member {game.ReturnCode} Code
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.Code = 0;

        /**
         * GetGameSceneNtc UserID.
         * @member {number} UserID
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetGameSceneNtc RoomID.
         * @member {number} RoomID
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.RoomID = 0;

        /**
         * GetGameSceneNtc TableID.
         * @member {number} TableID
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.TableID = 0;

        /**
         * GetGameSceneNtc GameState.
         * @member {game.GameState} GameState
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.GameState = 0;

        /**
         * GetGameSceneNtc CurrScore.
         * @member {number} CurrScore
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.CurrScore = 0;

        /**
         * GetGameSceneNtc MinTransferIn.
         * @member {number} MinTransferIn
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.MinTransferIn = 0;

        /**
         * GetGameSceneNtc MaxTransferIn.
         * @member {number} MaxTransferIn
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.MaxTransferIn = 0;

        /**
         * GetGameSceneNtc TableUsers.
         * @member {Array.<game.IGameUser>} TableUsers
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.TableUsers = $util.emptyArray;

        /**
         * GetGameSceneNtc FreeCharis.
         * @member {Array.<number>} FreeCharis
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.FreeCharis = $util.emptyArray;

        /**
         * GetGameSceneNtc AudienceUsers.
         * @member {Array.<game.IGameUser>} AudienceUsers
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.AudienceUsers = $util.emptyArray;

        /**
         * GetGameSceneNtc GameRound.
         * @member {game.GameRound} GameRound
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.GameRound = 0;

        /**
         * GetGameSceneNtc UserIDs.
         * @member {Array.<number>} UserIDs
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.UserIDs = $util.emptyArray;

        /**
         * GetGameSceneNtc HoldCards.
         * @member {Uint8Array} HoldCards
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.HoldCards = $util.newBuffer([]);

        /**
         * GetGameSceneNtc CommunityCards.
         * @member {Uint8Array} CommunityCards
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.CommunityCards = $util.newBuffer([]);

        /**
         * GetGameSceneNtc UserTurn.
         * @member {game.IUserTurnStartNtc|null|undefined} UserTurn
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.UserTurn = null;

        /**
         * GetGameSceneNtc PreFlopActionList.
         * @member {Array.<game.IUserActionNtc>} PreFlopActionList
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.PreFlopActionList = $util.emptyArray;

        /**
         * GetGameSceneNtc FlopActionList.
         * @member {Array.<game.IUserActionNtc>} FlopActionList
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.FlopActionList = $util.emptyArray;

        /**
         * GetGameSceneNtc TurnActionList.
         * @member {Array.<game.IUserActionNtc>} TurnActionList
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.TurnActionList = $util.emptyArray;

        /**
         * GetGameSceneNtc RiverActionList.
         * @member {Array.<game.IUserActionNtc>} RiverActionList
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.RiverActionList = $util.emptyArray;

        /**
         * GetGameSceneNtc ButtonChairID.
         * @member {number} ButtonChairID
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.ButtonChairID = 0;

        /**
         * GetGameSceneNtc SmallBlindAmount.
         * @member {number} SmallBlindAmount
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.SmallBlindAmount = 0;

        /**
         * GetGameSceneNtc BigBlindAmount.
         * @member {number} BigBlindAmount
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.BigBlindAmount = 0;

        /**
         * GetGameSceneNtc PotInfos.
         * @member {Array.<game.IPotInfo>} PotInfos
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.PotInfos = $util.emptyArray;

        /**
         * GetGameSceneNtc GameID.
         * @member {number} GameID
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.GameID = 0;

        /**
         * GetGameSceneNtc RoomName.
         * @member {string} RoomName
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.RoomName = "";

        /**
         * GetGameSceneNtc EnterAmount.
         * @member {number} EnterAmount
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.EnterAmount = 0;

        /**
         * GetGameSceneNtc TransferFees.
         * @member {number} TransferFees
         * @memberof game.GetGameSceneNtc
         * @instance
         */
        GetGameSceneNtc.prototype.TransferFees = 0;

        /**
         * Encodes the specified GetGameSceneNtc message. Does not implicitly {@link game.GetGameSceneNtc.verify|verify} messages.
         * @function encode
         * @memberof game.GetGameSceneNtc
         * @static
         * @param {game.IGetGameSceneNtc} m GetGameSceneNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GetGameSceneNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(16).int64(m.UserID);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(32).int32(m.TableID);
            if (m.GameState != null && Object.hasOwnProperty.call(m, "GameState"))
                w.uint32(40).int32(m.GameState);
            if (m.CurrScore != null && Object.hasOwnProperty.call(m, "CurrScore"))
                w.uint32(49).double(m.CurrScore);
            if (m.MinTransferIn != null && Object.hasOwnProperty.call(m, "MinTransferIn"))
                w.uint32(57).double(m.MinTransferIn);
            if (m.MaxTransferIn != null && Object.hasOwnProperty.call(m, "MaxTransferIn"))
                w.uint32(65).double(m.MaxTransferIn);
            if (m.TableUsers != null && m.TableUsers.length) {
                for (var i = 0; i < m.TableUsers.length; ++i)
                    $root.game.GameUser.encode(m.TableUsers[i], w.uint32(74).fork()).ldelim();
            }
            if (m.FreeCharis != null && m.FreeCharis.length) {
                w.uint32(82).fork();
                for (var i = 0; i < m.FreeCharis.length; ++i)
                    w.int32(m.FreeCharis[i]);
                w.ldelim();
            }
            if (m.AudienceUsers != null && m.AudienceUsers.length) {
                for (var i = 0; i < m.AudienceUsers.length; ++i)
                    $root.game.GameUser.encode(m.AudienceUsers[i], w.uint32(90).fork()).ldelim();
            }
            if (m.GameRound != null && Object.hasOwnProperty.call(m, "GameRound"))
                w.uint32(96).int32(m.GameRound);
            if (m.UserIDs != null && m.UserIDs.length) {
                w.uint32(106).fork();
                for (var i = 0; i < m.UserIDs.length; ++i)
                    w.int64(m.UserIDs[i]);
                w.ldelim();
            }
            if (m.HoldCards != null && Object.hasOwnProperty.call(m, "HoldCards"))
                w.uint32(114).bytes(m.HoldCards);
            if (m.CommunityCards != null && Object.hasOwnProperty.call(m, "CommunityCards"))
                w.uint32(122).bytes(m.CommunityCards);
            if (m.UserTurn != null && Object.hasOwnProperty.call(m, "UserTurn"))
                $root.game.UserTurnStartNtc.encode(m.UserTurn, w.uint32(130).fork()).ldelim();
            if (m.PreFlopActionList != null && m.PreFlopActionList.length) {
                for (var i = 0; i < m.PreFlopActionList.length; ++i)
                    $root.game.UserActionNtc.encode(m.PreFlopActionList[i], w.uint32(138).fork()).ldelim();
            }
            if (m.FlopActionList != null && m.FlopActionList.length) {
                for (var i = 0; i < m.FlopActionList.length; ++i)
                    $root.game.UserActionNtc.encode(m.FlopActionList[i], w.uint32(146).fork()).ldelim();
            }
            if (m.TurnActionList != null && m.TurnActionList.length) {
                for (var i = 0; i < m.TurnActionList.length; ++i)
                    $root.game.UserActionNtc.encode(m.TurnActionList[i], w.uint32(154).fork()).ldelim();
            }
            if (m.RiverActionList != null && m.RiverActionList.length) {
                for (var i = 0; i < m.RiverActionList.length; ++i)
                    $root.game.UserActionNtc.encode(m.RiverActionList[i], w.uint32(162).fork()).ldelim();
            }
            if (m.ButtonChairID != null && Object.hasOwnProperty.call(m, "ButtonChairID"))
                w.uint32(168).int32(m.ButtonChairID);
            if (m.SmallBlindAmount != null && Object.hasOwnProperty.call(m, "SmallBlindAmount"))
                w.uint32(177).double(m.SmallBlindAmount);
            if (m.BigBlindAmount != null && Object.hasOwnProperty.call(m, "BigBlindAmount"))
                w.uint32(185).double(m.BigBlindAmount);
            if (m.PotInfos != null && m.PotInfos.length) {
                for (var i = 0; i < m.PotInfos.length; ++i)
                    $root.game.PotInfo.encode(m.PotInfos[i], w.uint32(194).fork()).ldelim();
            }
            if (m.GameID != null && Object.hasOwnProperty.call(m, "GameID"))
                w.uint32(200).int32(m.GameID);
            if (m.RoomName != null && Object.hasOwnProperty.call(m, "RoomName"))
                w.uint32(210).string(m.RoomName);
            if (m.EnterAmount != null && Object.hasOwnProperty.call(m, "EnterAmount"))
                w.uint32(217).double(m.EnterAmount);
            if (m.TransferFees != null && Object.hasOwnProperty.call(m, "TransferFees"))
                w.uint32(225).double(m.TransferFees);
            return w;
        };

        /**
         * Decodes a GetGameSceneNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.GetGameSceneNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.GetGameSceneNtc} GetGameSceneNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameSceneNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.GetGameSceneNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.UserID = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int32();
                    break;
                case 4:
                    m.TableID = r.int32();
                    break;
                case 5:
                    m.GameState = r.int32();
                    break;
                case 6:
                    m.CurrScore = r.double();
                    break;
                case 7:
                    m.MinTransferIn = r.double();
                    break;
                case 8:
                    m.MaxTransferIn = r.double();
                    break;
                case 9:
                    if (!(m.TableUsers && m.TableUsers.length))
                        m.TableUsers = [];
                    m.TableUsers.push($root.game.GameUser.decode(r, r.uint32()));
                    break;
                case 10:
                    if (!(m.FreeCharis && m.FreeCharis.length))
                        m.FreeCharis = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.FreeCharis.push(r.int32());
                    } else
                        m.FreeCharis.push(r.int32());
                    break;
                case 11:
                    if (!(m.AudienceUsers && m.AudienceUsers.length))
                        m.AudienceUsers = [];
                    m.AudienceUsers.push($root.game.GameUser.decode(r, r.uint32()));
                    break;
                case 12:
                    m.GameRound = r.int32();
                    break;
                case 13:
                    if (!(m.UserIDs && m.UserIDs.length))
                        m.UserIDs = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.UserIDs.push(r.int64());
                    } else
                        m.UserIDs.push(r.int64());
                    break;
                case 14:
                    m.HoldCards = r.bytes();
                    break;
                case 15:
                    m.CommunityCards = r.bytes();
                    break;
                case 16:
                    m.UserTurn = $root.game.UserTurnStartNtc.decode(r, r.uint32());
                    break;
                case 17:
                    if (!(m.PreFlopActionList && m.PreFlopActionList.length))
                        m.PreFlopActionList = [];
                    m.PreFlopActionList.push($root.game.UserActionNtc.decode(r, r.uint32()));
                    break;
                case 18:
                    if (!(m.FlopActionList && m.FlopActionList.length))
                        m.FlopActionList = [];
                    m.FlopActionList.push($root.game.UserActionNtc.decode(r, r.uint32()));
                    break;
                case 19:
                    if (!(m.TurnActionList && m.TurnActionList.length))
                        m.TurnActionList = [];
                    m.TurnActionList.push($root.game.UserActionNtc.decode(r, r.uint32()));
                    break;
                case 20:
                    if (!(m.RiverActionList && m.RiverActionList.length))
                        m.RiverActionList = [];
                    m.RiverActionList.push($root.game.UserActionNtc.decode(r, r.uint32()));
                    break;
                case 21:
                    m.ButtonChairID = r.int32();
                    break;
                case 22:
                    m.SmallBlindAmount = r.double();
                    break;
                case 23:
                    m.BigBlindAmount = r.double();
                    break;
                case 24:
                    if (!(m.PotInfos && m.PotInfos.length))
                        m.PotInfos = [];
                    m.PotInfos.push($root.game.PotInfo.decode(r, r.uint32()));
                    break;
                case 25:
                    m.GameID = r.int32();
                    break;
                case 26:
                    m.RoomName = r.string();
                    break;
                case 27:
                    m.EnterAmount = r.double();
                    break;
                case 28:
                    m.TransferFees = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetGameSceneNtc;
    })();

    game.PotInfo = (function() {

        /**
         * Properties of a PotInfo.
         * @memberof game
         * @interface IPotInfo
         * @property {number|null} [PotID] PotInfo PotID
         * @property {number|null} [Amount] PotInfo Amount
         */

        /**
         * Constructs a new PotInfo.
         * @memberof game
         * @classdesc Represents a PotInfo.
         * @implements IPotInfo
         * @constructor
         * @param {game.IPotInfo=} [p] Properties to set
         */
        function PotInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PotInfo PotID.
         * @member {number} PotID
         * @memberof game.PotInfo
         * @instance
         */
        PotInfo.prototype.PotID = 0;

        /**
         * PotInfo Amount.
         * @member {number} Amount
         * @memberof game.PotInfo
         * @instance
         */
        PotInfo.prototype.Amount = 0;

        /**
         * Encodes the specified PotInfo message. Does not implicitly {@link game.PotInfo.verify|verify} messages.
         * @function encode
         * @memberof game.PotInfo
         * @static
         * @param {game.IPotInfo} m PotInfo message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        PotInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PotID != null && Object.hasOwnProperty.call(m, "PotID"))
                w.uint32(8).int32(m.PotID);
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(17).double(m.Amount);
            return w;
        };

        /**
         * Decodes a PotInfo message from the specified reader or buffer.
         * @function decode
         * @memberof game.PotInfo
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.PotInfo} PotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        PotInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.PotInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PotID = r.int32();
                    break;
                case 2:
                    m.Amount = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PotInfo;
    })();

    game.PotInfoNtc = (function() {

        /**
         * Properties of a PotInfoNtc.
         * @memberof game
         * @interface IPotInfoNtc
         * @property {number|null} [RoomID] PotInfoNtc RoomID
         * @property {number|null} [TableID] PotInfoNtc TableID
         * @property {Array.<game.IPotInfo>|null} [PotInfos] PotInfoNtc PotInfos
         */

        /**
         * Constructs a new PotInfoNtc.
         * @memberof game
         * @classdesc Represents a PotInfoNtc.
         * @implements IPotInfoNtc
         * @constructor
         * @param {game.IPotInfoNtc=} [p] Properties to set
         */
        function PotInfoNtc(p) {
            this.PotInfos = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PotInfoNtc RoomID.
         * @member {number} RoomID
         * @memberof game.PotInfoNtc
         * @instance
         */
        PotInfoNtc.prototype.RoomID = 0;

        /**
         * PotInfoNtc TableID.
         * @member {number} TableID
         * @memberof game.PotInfoNtc
         * @instance
         */
        PotInfoNtc.prototype.TableID = 0;

        /**
         * PotInfoNtc PotInfos.
         * @member {Array.<game.IPotInfo>} PotInfos
         * @memberof game.PotInfoNtc
         * @instance
         */
        PotInfoNtc.prototype.PotInfos = $util.emptyArray;

        /**
         * Encodes the specified PotInfoNtc message. Does not implicitly {@link game.PotInfoNtc.verify|verify} messages.
         * @function encode
         * @memberof game.PotInfoNtc
         * @static
         * @param {game.IPotInfoNtc} m PotInfoNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        PotInfoNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            if (m.PotInfos != null && m.PotInfos.length) {
                for (var i = 0; i < m.PotInfos.length; ++i)
                    $root.game.PotInfo.encode(m.PotInfos[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a PotInfoNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.PotInfoNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.PotInfoNtc} PotInfoNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        PotInfoNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.PotInfoNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                case 3:
                    if (!(m.PotInfos && m.PotInfos.length))
                        m.PotInfos = [];
                    m.PotInfos.push($root.game.PotInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PotInfoNtc;
    })();

    game.UserGameResult = (function() {

        /**
         * Properties of a UserGameResult.
         * @memberof game
         * @interface IUserGameResult
         * @property {number|null} [UserID] UserGameResult UserID
         * @property {number|null} [CurrScore] UserGameResult CurrScore
         * @property {number|null} [ScoreChangeAmount] UserGameResult ScoreChangeAmount
         */

        /**
         * Constructs a new UserGameResult.
         * @memberof game
         * @classdesc Represents a UserGameResult.
         * @implements IUserGameResult
         * @constructor
         * @param {game.IUserGameResult=} [p] Properties to set
         */
        function UserGameResult(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserGameResult UserID.
         * @member {number} UserID
         * @memberof game.UserGameResult
         * @instance
         */
        UserGameResult.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserGameResult CurrScore.
         * @member {number} CurrScore
         * @memberof game.UserGameResult
         * @instance
         */
        UserGameResult.prototype.CurrScore = 0;

        /**
         * UserGameResult ScoreChangeAmount.
         * @member {number} ScoreChangeAmount
         * @memberof game.UserGameResult
         * @instance
         */
        UserGameResult.prototype.ScoreChangeAmount = 0;

        /**
         * Encodes the specified UserGameResult message. Does not implicitly {@link game.UserGameResult.verify|verify} messages.
         * @function encode
         * @memberof game.UserGameResult
         * @static
         * @param {game.IUserGameResult} m UserGameResult message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        UserGameResult.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(8).int64(m.UserID);
            if (m.CurrScore != null && Object.hasOwnProperty.call(m, "CurrScore"))
                w.uint32(17).double(m.CurrScore);
            if (m.ScoreChangeAmount != null && Object.hasOwnProperty.call(m, "ScoreChangeAmount"))
                w.uint32(25).double(m.ScoreChangeAmount);
            return w;
        };

        /**
         * Decodes a UserGameResult message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserGameResult
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.UserGameResult} UserGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        UserGameResult.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.UserGameResult();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UserID = r.int64();
                    break;
                case 2:
                    m.CurrScore = r.double();
                    break;
                case 3:
                    m.ScoreChangeAmount = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserGameResult;
    })();

    game.GameEndNtc = (function() {

        /**
         * Properties of a GameEndNtc.
         * @memberof game
         * @interface IGameEndNtc
         * @property {number|null} [RoomID] GameEndNtc RoomID
         * @property {number|null} [TableID] GameEndNtc TableID
         * @property {Array.<game.IUserGameResult>|null} [Results] GameEndNtc Results
         * @property {game.GameState|null} [GameState] GameEndNtc GameState
         */

        /**
         * Constructs a new GameEndNtc.
         * @memberof game
         * @classdesc Represents a GameEndNtc.
         * @implements IGameEndNtc
         * @constructor
         * @param {game.IGameEndNtc=} [p] Properties to set
         */
        function GameEndNtc(p) {
            this.Results = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameEndNtc RoomID.
         * @member {number} RoomID
         * @memberof game.GameEndNtc
         * @instance
         */
        GameEndNtc.prototype.RoomID = 0;

        /**
         * GameEndNtc TableID.
         * @member {number} TableID
         * @memberof game.GameEndNtc
         * @instance
         */
        GameEndNtc.prototype.TableID = 0;

        /**
         * GameEndNtc Results.
         * @member {Array.<game.IUserGameResult>} Results
         * @memberof game.GameEndNtc
         * @instance
         */
        GameEndNtc.prototype.Results = $util.emptyArray;

        /**
         * GameEndNtc GameState.
         * @member {game.GameState} GameState
         * @memberof game.GameEndNtc
         * @instance
         */
        GameEndNtc.prototype.GameState = 0;

        /**
         * Encodes the specified GameEndNtc message. Does not implicitly {@link game.GameEndNtc.verify|verify} messages.
         * @function encode
         * @memberof game.GameEndNtc
         * @static
         * @param {game.IGameEndNtc} m GameEndNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GameEndNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            if (m.Results != null && m.Results.length) {
                for (var i = 0; i < m.Results.length; ++i)
                    $root.game.UserGameResult.encode(m.Results[i], w.uint32(26).fork()).ldelim();
            }
            if (m.GameState != null && Object.hasOwnProperty.call(m, "GameState"))
                w.uint32(32).int32(m.GameState);
            return w;
        };

        /**
         * Decodes a GameEndNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameEndNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.GameEndNtc} GameEndNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GameEndNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.GameEndNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                case 3:
                    if (!(m.Results && m.Results.length))
                        m.Results = [];
                    m.Results.push($root.game.UserGameResult.decode(r, r.uint32()));
                    break;
                case 4:
                    m.GameState = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameEndNtc;
    })();

    game.EmojiChatNtc = (function() {

        /**
         * Properties of an EmojiChatNtc.
         * @memberof game
         * @interface IEmojiChatNtc
         * @property {number|null} [RoomID] EmojiChatNtc RoomID
         * @property {number|null} [TableID] EmojiChatNtc TableID
         * @property {number|null} [UserID] EmojiChatNtc UserID
         * @property {number|null} [EmojiIndex] EmojiChatNtc EmojiIndex
         */

        /**
         * Constructs a new EmojiChatNtc.
         * @memberof game
         * @classdesc Represents an EmojiChatNtc.
         * @implements IEmojiChatNtc
         * @constructor
         * @param {game.IEmojiChatNtc=} [p] Properties to set
         */
        function EmojiChatNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * EmojiChatNtc RoomID.
         * @member {number} RoomID
         * @memberof game.EmojiChatNtc
         * @instance
         */
        EmojiChatNtc.prototype.RoomID = 0;

        /**
         * EmojiChatNtc TableID.
         * @member {number} TableID
         * @memberof game.EmojiChatNtc
         * @instance
         */
        EmojiChatNtc.prototype.TableID = 0;

        /**
         * EmojiChatNtc UserID.
         * @member {number} UserID
         * @memberof game.EmojiChatNtc
         * @instance
         */
        EmojiChatNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EmojiChatNtc EmojiIndex.
         * @member {number} EmojiIndex
         * @memberof game.EmojiChatNtc
         * @instance
         */
        EmojiChatNtc.prototype.EmojiIndex = 0;

        /**
         * Encodes the specified EmojiChatNtc message. Does not implicitly {@link game.EmojiChatNtc.verify|verify} messages.
         * @function encode
         * @memberof game.EmojiChatNtc
         * @static
         * @param {game.IEmojiChatNtc} m EmojiChatNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        EmojiChatNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(24).int64(m.UserID);
            if (m.EmojiIndex != null && Object.hasOwnProperty.call(m, "EmojiIndex"))
                w.uint32(32).int32(m.EmojiIndex);
            return w;
        };

        /**
         * Decodes an EmojiChatNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.EmojiChatNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.EmojiChatNtc} EmojiChatNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        EmojiChatNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.EmojiChatNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                case 3:
                    m.UserID = r.int64();
                    break;
                case 4:
                    m.EmojiIndex = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return EmojiChatNtc;
    })();

    game.TextChatNtc = (function() {

        /**
         * Properties of a TextChatNtc.
         * @memberof game
         * @interface ITextChatNtc
         * @property {number|null} [RoomID] TextChatNtc RoomID
         * @property {number|null} [TableID] TextChatNtc TableID
         * @property {number|null} [UserID] TextChatNtc UserID
         * @property {string|null} [Text] TextChatNtc Text
         */

        /**
         * Constructs a new TextChatNtc.
         * @memberof game
         * @classdesc Represents a TextChatNtc.
         * @implements ITextChatNtc
         * @constructor
         * @param {game.ITextChatNtc=} [p] Properties to set
         */
        function TextChatNtc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * TextChatNtc RoomID.
         * @member {number} RoomID
         * @memberof game.TextChatNtc
         * @instance
         */
        TextChatNtc.prototype.RoomID = 0;

        /**
         * TextChatNtc TableID.
         * @member {number} TableID
         * @memberof game.TextChatNtc
         * @instance
         */
        TextChatNtc.prototype.TableID = 0;

        /**
         * TextChatNtc UserID.
         * @member {number} UserID
         * @memberof game.TextChatNtc
         * @instance
         */
        TextChatNtc.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TextChatNtc Text.
         * @member {string} Text
         * @memberof game.TextChatNtc
         * @instance
         */
        TextChatNtc.prototype.Text = "";

        /**
         * Encodes the specified TextChatNtc message. Does not implicitly {@link game.TextChatNtc.verify|verify} messages.
         * @function encode
         * @memberof game.TextChatNtc
         * @static
         * @param {game.ITextChatNtc} m TextChatNtc message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        TextChatNtc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(8).int32(m.RoomID);
            if (m.TableID != null && Object.hasOwnProperty.call(m, "TableID"))
                w.uint32(16).int32(m.TableID);
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(24).int64(m.UserID);
            if (m.Text != null && Object.hasOwnProperty.call(m, "Text"))
                w.uint32(34).string(m.Text);
            return w;
        };

        /**
         * Decodes a TextChatNtc message from the specified reader or buffer.
         * @function decode
         * @memberof game.TextChatNtc
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.TextChatNtc} TextChatNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        TextChatNtc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.TextChatNtc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomID = r.int32();
                    break;
                case 2:
                    m.TableID = r.int32();
                    break;
                case 3:
                    m.UserID = r.int64();
                    break;
                case 4:
                    m.Text = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TextChatNtc;
    })();

    /**
     * ReturnCode enum.
     * @name game.ReturnCode
     * @enum {number}
     * @property {number} Success=0 Success value
     * @property {number} InternalServerError=10000 InternalServerError value
     * @property {number} InvalidChairID=20000 InvalidChairID value
     * @property {number} ErrorUserSeated=21000 ErrorUserSeated value
     * @property {number} ErrorUserNotSeated=21001 ErrorUserNotSeated value
     * @property {number} ErrorUserNotExists=21002 ErrorUserNotExists value
     * @property {number} ErrorUserEntered=21003 ErrorUserEntered value
     * @property {number} ErrorUserNotEntered=21004 ErrorUserNotEntered value
     * @property {number} ErrorTableNotExists=22000 ErrorTableNotExists value
     * @property {number} ErrorTableJoined=22001 ErrorTableJoined value
     * @property {number} ErrorTableFullUsers=22002 ErrorTableFullUsers value
     * @property {number} ErrorTableExists=22003 ErrorTableExists value
     * @property {number} ErrorTableNotJoined=22004 ErrorTableNotJoined value
     * @property {number} ErrorChairOccupied=23000 ErrorChairOccupied value
     * @property {number} InvalidTransferAmount=24000 InvalidTransferAmount value
     * @property {number} InvalidUserAction=25000 InvalidUserAction value
     * @property {number} ErrorUserPlaying=30000 ErrorUserPlaying value
     * @property {number} ErrorInsufficientBalance=30100 ErrorInsufficientBalance value
     * @property {number} ErrorEnterAmount=30101 ErrorEnterAmount value
     * @property {number} ErrorActionTimeout=30200 ErrorActionTimeout value
     */
    game.ReturnCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Success"] = 0;
        values[valuesById[10000] = "InternalServerError"] = 10000;
        values[valuesById[20000] = "InvalidChairID"] = 20000;
        values[valuesById[21000] = "ErrorUserSeated"] = 21000;
        values[valuesById[21001] = "ErrorUserNotSeated"] = 21001;
        values[valuesById[21002] = "ErrorUserNotExists"] = 21002;
        values[valuesById[21003] = "ErrorUserEntered"] = 21003;
        values[valuesById[21004] = "ErrorUserNotEntered"] = 21004;
        values[valuesById[22000] = "ErrorTableNotExists"] = 22000;
        values[valuesById[22001] = "ErrorTableJoined"] = 22001;
        values[valuesById[22002] = "ErrorTableFullUsers"] = 22002;
        values[valuesById[22003] = "ErrorTableExists"] = 22003;
        values[valuesById[22004] = "ErrorTableNotJoined"] = 22004;
        values[valuesById[23000] = "ErrorChairOccupied"] = 23000;
        values[valuesById[24000] = "InvalidTransferAmount"] = 24000;
        values[valuesById[25000] = "InvalidUserAction"] = 25000;
        values[valuesById[30000] = "ErrorUserPlaying"] = 30000;
        values[valuesById[30100] = "ErrorInsufficientBalance"] = 30100;
        values[valuesById[30101] = "ErrorEnterAmount"] = 30101;
        values[valuesById[30200] = "ErrorActionTimeout"] = 30200;
        return values;
    })();

    /**
     * GameState enum.
     * @name game.GameState
     * @enum {number}
     * @property {number} GameInvalid=0 GameInvalid value
     * @property {number} GameFree=10 GameFree value
     * @property {number} GamePlaying=20 GamePlaying value
     * @property {number} GameEND=30 GameEND value
     */
    game.GameState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GameInvalid"] = 0;
        values[valuesById[10] = "GameFree"] = 10;
        values[valuesById[20] = "GamePlaying"] = 20;
        values[valuesById[30] = "GameEND"] = 30;
        return values;
    })();

    /**
     * UserState enum.
     * @name game.UserState
     * @enum {number}
     * @property {number} UserInvalid=0 UserInvalid value
     * @property {number} UserFree=10 UserFree value
     * @property {number} UserPlaying=20 UserPlaying value
     * @property {number} UserFold=30 UserFold value
     */
    game.UserState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UserInvalid"] = 0;
        values[valuesById[10] = "UserFree"] = 10;
        values[valuesById[20] = "UserPlaying"] = 20;
        values[valuesById[30] = "UserFold"] = 30;
        return values;
    })();

    /**
     * GameRound enum.
     * @name game.GameRound
     * @enum {number}
     * @property {number} RoundInvalid=0 RoundInvalid value
     * @property {number} RoundPreFlop=1 RoundPreFlop value
     * @property {number} RoundFlop=2 RoundFlop value
     * @property {number} RoundTurn=3 RoundTurn value
     * @property {number} RoundRiver=4 RoundRiver value
     * @property {number} RoundEnd=5 RoundEnd value
     */
    game.GameRound = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RoundInvalid"] = 0;
        values[valuesById[1] = "RoundPreFlop"] = 1;
        values[valuesById[2] = "RoundFlop"] = 2;
        values[valuesById[3] = "RoundTurn"] = 3;
        values[valuesById[4] = "RoundRiver"] = 4;
        values[valuesById[5] = "RoundEnd"] = 5;
        return values;
    })();

    /**
     * UserActionKind enum.
     * @name game.UserActionKind
     * @enum {number}
     * @property {number} ActionInvalid=0 ActionInvalid value
     * @property {number} ActionPostSmallBlind=10 ActionPostSmallBlind value
     * @property {number} ActionPostBigBlind=11 ActionPostBigBlind value
     * @property {number} ActionFold=20 ActionFold value
     * @property {number} ActionBet=21 ActionBet value
     * @property {number} ActionCall=22 ActionCall value
     * @property {number} ActionRaise=23 ActionRaise value
     * @property {number} ActionAllIn=24 ActionAllIn value
     * @property {number} ActionCheck=25 ActionCheck value
     * @property {number} ActionShowHole=26 ActionShowHole value
     */
    game.UserActionKind = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ActionInvalid"] = 0;
        values[valuesById[10] = "ActionPostSmallBlind"] = 10;
        values[valuesById[11] = "ActionPostBigBlind"] = 11;
        values[valuesById[20] = "ActionFold"] = 20;
        values[valuesById[21] = "ActionBet"] = 21;
        values[valuesById[22] = "ActionCall"] = 22;
        values[valuesById[23] = "ActionRaise"] = 23;
        values[valuesById[24] = "ActionAllIn"] = 24;
        values[valuesById[25] = "ActionCheck"] = 25;
        values[valuesById[26] = "ActionShowHole"] = 26;
        return values;
    })();

    /**
     * CardRank enum.
     * @name game.CardRank
     * @enum {number}
     * @property {number} RankInvalid=0 RankInvalid value
     * @property {number} RankHighCard=1 RankHighCard value
     * @property {number} RankOnePair=2 RankOnePair value
     * @property {number} RankTwoPair=3 RankTwoPair value
     * @property {number} RankThreeOfAKind=4 RankThreeOfAKind value
     * @property {number} RankStraight=5 RankStraight value
     * @property {number} RankFlush=6 RankFlush value
     * @property {number} RankFullHouse=7 RankFullHouse value
     * @property {number} RankFourOfAKind=8 RankFourOfAKind value
     * @property {number} RankStraightFlush=9 RankStraightFlush value
     * @property {number} RankRoyalFlush=10 RankRoyalFlush value
     */
    game.CardRank = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RankInvalid"] = 0;
        values[valuesById[1] = "RankHighCard"] = 1;
        values[valuesById[2] = "RankOnePair"] = 2;
        values[valuesById[3] = "RankTwoPair"] = 3;
        values[valuesById[4] = "RankThreeOfAKind"] = 4;
        values[valuesById[5] = "RankStraight"] = 5;
        values[valuesById[6] = "RankFlush"] = 6;
        values[valuesById[7] = "RankFullHouse"] = 7;
        values[valuesById[8] = "RankFourOfAKind"] = 8;
        values[valuesById[9] = "RankStraightFlush"] = 9;
        values[valuesById[10] = "RankRoyalFlush"] = 10;
        return values;
    })();

    game.GameUser = (function() {

        /**
         * Properties of a GameUser.
         * @memberof game
         * @interface IGameUser
         * @property {number|null} [UserID] GameUser UserID
         * @property {string|null} [Nickname] GameUser Nickname
         * @property {string|null} [Avatar] GameUser Avatar
         * @property {number|null} [ChairID] GameUser ChairID
         * @property {number|null} [Balance] GameUser Balance
         * @property {number|null} [CurrScore] GameUser CurrScore
         */

        /**
         * Constructs a new GameUser.
         * @memberof game
         * @classdesc Represents a GameUser.
         * @implements IGameUser
         * @constructor
         * @param {game.IGameUser=} [p] Properties to set
         */
        function GameUser(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameUser UserID.
         * @member {number} UserID
         * @memberof game.GameUser
         * @instance
         */
        GameUser.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameUser Nickname.
         * @member {string} Nickname
         * @memberof game.GameUser
         * @instance
         */
        GameUser.prototype.Nickname = "";

        /**
         * GameUser Avatar.
         * @member {string} Avatar
         * @memberof game.GameUser
         * @instance
         */
        GameUser.prototype.Avatar = "";

        /**
         * GameUser ChairID.
         * @member {number} ChairID
         * @memberof game.GameUser
         * @instance
         */
        GameUser.prototype.ChairID = 0;

        /**
         * GameUser Balance.
         * @member {number} Balance
         * @memberof game.GameUser
         * @instance
         */
        GameUser.prototype.Balance = 0;

        /**
         * GameUser CurrScore.
         * @member {number} CurrScore
         * @memberof game.GameUser
         * @instance
         */
        GameUser.prototype.CurrScore = 0;

        /**
         * Encodes the specified GameUser message. Does not implicitly {@link game.GameUser.verify|verify} messages.
         * @function encode
         * @memberof game.GameUser
         * @static
         * @param {game.IGameUser} m GameUser message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GameUser.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UserID != null && Object.hasOwnProperty.call(m, "UserID"))
                w.uint32(8).int64(m.UserID);
            if (m.Nickname != null && Object.hasOwnProperty.call(m, "Nickname"))
                w.uint32(18).string(m.Nickname);
            if (m.Avatar != null && Object.hasOwnProperty.call(m, "Avatar"))
                w.uint32(26).string(m.Avatar);
            if (m.ChairID != null && Object.hasOwnProperty.call(m, "ChairID"))
                w.uint32(32).int32(m.ChairID);
            if (m.Balance != null && Object.hasOwnProperty.call(m, "Balance"))
                w.uint32(41).double(m.Balance);
            if (m.CurrScore != null && Object.hasOwnProperty.call(m, "CurrScore"))
                w.uint32(49).double(m.CurrScore);
            return w;
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameUser
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.GameUser} GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GameUser.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.GameUser();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UserID = r.int64();
                    break;
                case 2:
                    m.Nickname = r.string();
                    break;
                case 3:
                    m.Avatar = r.string();
                    break;
                case 4:
                    m.ChairID = r.int32();
                    break;
                case 5:
                    m.Balance = r.double();
                    break;
                case 6:
                    m.CurrScore = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameUser;
    })();

    game.RecordListInfo = (function() {

        /**
         * Properties of a RecordListInfo.
         * @memberof game
         * @interface IRecordListInfo
         * @property {number|null} [Index] RecordListInfo Index
         * @property {string|null} [Code] RecordListInfo Code
         * @property {number|null} [Date] RecordListInfo Date
         * @property {number|null} [WinLose] RecordListInfo WinLose
         */

        /**
         * Constructs a new RecordListInfo.
         * @memberof game
         * @classdesc Represents a RecordListInfo.
         * @implements IRecordListInfo
         * @constructor
         * @param {game.IRecordListInfo=} [p] Properties to set
         */
        function RecordListInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RecordListInfo Index.
         * @member {number} Index
         * @memberof game.RecordListInfo
         * @instance
         */
        RecordListInfo.prototype.Index = 0;

        /**
         * RecordListInfo Code.
         * @member {string} Code
         * @memberof game.RecordListInfo
         * @instance
         */
        RecordListInfo.prototype.Code = "";

        /**
         * RecordListInfo Date.
         * @member {number} Date
         * @memberof game.RecordListInfo
         * @instance
         */
        RecordListInfo.prototype.Date = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RecordListInfo WinLose.
         * @member {number} WinLose
         * @memberof game.RecordListInfo
         * @instance
         */
        RecordListInfo.prototype.WinLose = 0;

        /**
         * Encodes the specified RecordListInfo message. Does not implicitly {@link game.RecordListInfo.verify|verify} messages.
         * @function encode
         * @memberof game.RecordListInfo
         * @static
         * @param {game.IRecordListInfo} m RecordListInfo message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RecordListInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Index != null && Object.hasOwnProperty.call(m, "Index"))
                w.uint32(8).int32(m.Index);
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(18).string(m.Code);
            if (m.Date != null && Object.hasOwnProperty.call(m, "Date"))
                w.uint32(24).int64(m.Date);
            if (m.WinLose != null && Object.hasOwnProperty.call(m, "WinLose"))
                w.uint32(33).double(m.WinLose);
            return w;
        };

        /**
         * Decodes a RecordListInfo message from the specified reader or buffer.
         * @function decode
         * @memberof game.RecordListInfo
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {game.RecordListInfo} RecordListInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RecordListInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.game.RecordListInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Index = r.int32();
                    break;
                case 2:
                    m.Code = r.string();
                    break;
                case 3:
                    m.Date = r.int64();
                    break;
                case 4:
                    m.WinLose = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RecordListInfo;
    })();

    return game;
})();