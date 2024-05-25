declare global {
 // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace MessageType. */
export namespace MessageType {

    /** MessageMainType enum. */
    enum MessageMainType {
        MSG_UnKnow = 0,
        TypeHeart = 1000,
        TypeBroadcast = 1001,
        TypeC2c = 1002,
        TypeKick = 1003,
        TypeBalance = 1004,
        TypeTexas = 1008,
        TypeShort = 1010
    }

    /** MessageSubType enum. */
    enum MessageSubType {
        MSG_UnKnow = 0,
        GetGameScene = 201,
        UserSitDown = 202,
        UserStandUp = 203,
        UserTransferIn = 204,
        UserTransferOut = 205,
        UserFold = 206,
        UserBet = 207,
        UserCall = 208,
        UserRaise = 209,
        UserAllIn = 210,
        UserCheck = 211,
        JoinTable = 212,
        LeaveTable = 213,
        RecordList = 214,
        RecordDetails = 215,
        EmojiChat = 216,
        TextChat = 217,
        NtcGetGameScene = 401,
        NtcUserSitDown = 402,
        NtcUserStandUp = 403,
        NtcUserTransferIn = 404,
        NtcUserTransferOut = 405,
        NtcUserFold = 406,
        NtcUserBet = 407,
        NtcUserCall = 408,
        NtcUserRaise = 409,
        NtcUserAllIn = 410,
        NtcUserCheck = 411,
        NtcJoinTable = 412,
        NtcLeaveTable = 413,
        NtcAssetsChange = 414,
        NtcCountdown = 415,
        NtcGameStart = 416,
        NtcRoundStart = 417,
        NtcTurnStart = 418,
        NtcUserAction = 419,
        NtcHoleCards = 420,
        NtcUserHoleCards = 421,
        NtcCommunityCard = 422,
        NtcGameEnd = 423,
        NtcPotInfo = 424,
        NtcEmojiChat = 425,
        NtcTextChat = 426
    }
}

/** Namespace msg. */
export namespace msg {

    /** Properties of a Message. */
    interface IMessage {

        /** Message MsgId */
        MsgId?: (number|null);

        /** Message Type */
        Type?: (number|null);

        /** Message MsgType */
        MsgType?: (number|null);

        /** Message From */
        From?: (string|null);

        /** Message To */
        To?: (string|null);

        /** Message Ope */
        Ope?: (number|null);

        /** Message Title */
        Title?: (string|null);

        /** Message Body */
        Body?: (Uint8Array|null);

        /** Message Timestamp */
        Timestamp?: (number|null);

        /** Message MarkRead */
        MarkRead?: (number|null);

        /** Message Device */
        Device?: (number|null);

        /** Message Ext */
        Ext?: (string|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [p] Properties to set
         */
        constructor(p?: msg.IMessage);

        /** Message MsgId. */
        public MsgId: number;

        /** Message Type. */
        public Type: number;

        /** Message MsgType. */
        public MsgType: number;

        /** Message From. */
        public From: string;

        /** Message To. */
        public To: string;

        /** Message Ope. */
        public Ope: number;

        /** Message Title. */
        public Title: string;

        /** Message Body. */
        public Body: Uint8Array;

        /** Message Timestamp. */
        public Timestamp: number;

        /** Message MarkRead. */
        public MarkRead: number;

        /** Message Device. */
        public Device: number;

        /** Message Ext. */
        public Ext: string;

        /**
         * Encodes the specified Message message. Does not implicitly {@link msg.Message.verify|verify} messages.
         * @param m Message message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: msg.IMessage, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): msg.Message;
    }
}

/** Namespace game. */
export namespace game {

    /** Properties of a GetGameSceneReq. */
    interface IGetGameSceneReq {

        /** GetGameSceneReq RoomID */
        RoomID?: (number|null);

        /** GetGameSceneReq TableID */
        TableID?: (number|null);
    }

    /** Represents a GetGameSceneReq. */
    class GetGameSceneReq implements IGetGameSceneReq {

        /**
         * Constructs a new GetGameSceneReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IGetGameSceneReq);

        /** GetGameSceneReq RoomID. */
        public RoomID: number;

        /** GetGameSceneReq TableID. */
        public TableID: number;

        /**
         * Encodes the specified GetGameSceneReq message. Does not implicitly {@link game.GetGameSceneReq.verify|verify} messages.
         * @param m GetGameSceneReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IGetGameSceneReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetGameSceneReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GetGameSceneReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.GetGameSceneReq;
    }

    /** Properties of a GetGameSceneResp. */
    interface IGetGameSceneResp {

        /** GetGameSceneResp Code */
        Code?: (game.ReturnCode|null);

        /** GetGameSceneResp Msg */
        Msg?: (string|null);
    }

    /** Represents a GetGameSceneResp. */
    class GetGameSceneResp implements IGetGameSceneResp {

        /**
         * Constructs a new GetGameSceneResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IGetGameSceneResp);

        /** GetGameSceneResp Code. */
        public Code: game.ReturnCode;

        /** GetGameSceneResp Msg. */
        public Msg: string;

        /**
         * Encodes the specified GetGameSceneResp message. Does not implicitly {@link game.GetGameSceneResp.verify|verify} messages.
         * @param m GetGameSceneResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IGetGameSceneResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetGameSceneResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GetGameSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.GetGameSceneResp;
    }

    /** Properties of a JoinTableReq. */
    interface IJoinTableReq {

        /** JoinTableReq RoomID */
        RoomID?: (number|null);

        /** JoinTableReq TableID */
        TableID?: (number|null);
    }

    /** Represents a JoinTableReq. */
    class JoinTableReq implements IJoinTableReq {

        /**
         * Constructs a new JoinTableReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IJoinTableReq);

        /** JoinTableReq RoomID. */
        public RoomID: number;

        /** JoinTableReq TableID. */
        public TableID: number;

        /**
         * Encodes the specified JoinTableReq message. Does not implicitly {@link game.JoinTableReq.verify|verify} messages.
         * @param m JoinTableReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IJoinTableReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinTableReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns JoinTableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.JoinTableReq;
    }

    /** Properties of a JoinTableResp. */
    interface IJoinTableResp {

        /** JoinTableResp Code */
        Code?: (game.ReturnCode|null);

        /** JoinTableResp Msg */
        Msg?: (string|null);
    }

    /** Represents a JoinTableResp. */
    class JoinTableResp implements IJoinTableResp {

        /**
         * Constructs a new JoinTableResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IJoinTableResp);

        /** JoinTableResp Code. */
        public Code: game.ReturnCode;

        /** JoinTableResp Msg. */
        public Msg: string;

        /**
         * Encodes the specified JoinTableResp message. Does not implicitly {@link game.JoinTableResp.verify|verify} messages.
         * @param m JoinTableResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IJoinTableResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinTableResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns JoinTableResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.JoinTableResp;
    }

    /** Properties of a LeaveTableReq. */
    interface ILeaveTableReq {

        /** LeaveTableReq RoomID */
        RoomID?: (number|null);

        /** LeaveTableReq TableID */
        TableID?: (number|null);
    }

    /** Represents a LeaveTableReq. */
    class LeaveTableReq implements ILeaveTableReq {

        /**
         * Constructs a new LeaveTableReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.ILeaveTableReq);

        /** LeaveTableReq RoomID. */
        public RoomID: number;

        /** LeaveTableReq TableID. */
        public TableID: number;

        /**
         * Encodes the specified LeaveTableReq message. Does not implicitly {@link game.LeaveTableReq.verify|verify} messages.
         * @param m LeaveTableReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.ILeaveTableReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LeaveTableReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LeaveTableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.LeaveTableReq;
    }

    /** Properties of a LeaveTableResp. */
    interface ILeaveTableResp {

        /** LeaveTableResp Code */
        Code?: (game.ReturnCode|null);

        /** LeaveTableResp Msg */
        Msg?: (string|null);
    }

    /** Represents a LeaveTableResp. */
    class LeaveTableResp implements ILeaveTableResp {

        /**
         * Constructs a new LeaveTableResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.ILeaveTableResp);

        /** LeaveTableResp Code. */
        public Code: game.ReturnCode;

        /** LeaveTableResp Msg. */
        public Msg: string;

        /**
         * Encodes the specified LeaveTableResp message. Does not implicitly {@link game.LeaveTableResp.verify|verify} messages.
         * @param m LeaveTableResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.ILeaveTableResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LeaveTableResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LeaveTableResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.LeaveTableResp;
    }

    /** Properties of a UserSitDownReq. */
    interface IUserSitDownReq {

        /** UserSitDownReq RoomID */
        RoomID?: (number|null);

        /** UserSitDownReq TableID */
        TableID?: (number|null);

        /** UserSitDownReq ChairID */
        ChairID?: (number|null);
    }

    /** Represents a UserSitDownReq. */
    class UserSitDownReq implements IUserSitDownReq {

        /**
         * Constructs a new UserSitDownReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserSitDownReq);

        /** UserSitDownReq RoomID. */
        public RoomID: number;

        /** UserSitDownReq TableID. */
        public TableID: number;

        /** UserSitDownReq ChairID. */
        public ChairID: number;

        /**
         * Encodes the specified UserSitDownReq message. Does not implicitly {@link game.UserSitDownReq.verify|verify} messages.
         * @param m UserSitDownReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserSitDownReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserSitDownReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserSitDownReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserSitDownReq;
    }

    /** Properties of a UserSitDownResp. */
    interface IUserSitDownResp {

        /** UserSitDownResp Code */
        Code?: (game.ReturnCode|null);

        /** UserSitDownResp Msg */
        Msg?: (string|null);
    }

    /** Represents a UserSitDownResp. */
    class UserSitDownResp implements IUserSitDownResp {

        /**
         * Constructs a new UserSitDownResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserSitDownResp);

        /** UserSitDownResp Code. */
        public Code: game.ReturnCode;

        /** UserSitDownResp Msg. */
        public Msg: string;

        /**
         * Encodes the specified UserSitDownResp message. Does not implicitly {@link game.UserSitDownResp.verify|verify} messages.
         * @param m UserSitDownResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserSitDownResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserSitDownResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserSitDownResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserSitDownResp;
    }

    /** Properties of a UserStandUpReq. */
    interface IUserStandUpReq {

        /** UserStandUpReq RoomID */
        RoomID?: (number|null);

        /** UserStandUpReq TableID */
        TableID?: (number|null);

        /** UserStandUpReq ChairID */
        ChairID?: (number|null);
    }

    /** Represents a UserStandUpReq. */
    class UserStandUpReq implements IUserStandUpReq {

        /**
         * Constructs a new UserStandUpReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserStandUpReq);

        /** UserStandUpReq RoomID. */
        public RoomID: number;

        /** UserStandUpReq TableID. */
        public TableID: number;

        /** UserStandUpReq ChairID. */
        public ChairID: number;

        /**
         * Encodes the specified UserStandUpReq message. Does not implicitly {@link game.UserStandUpReq.verify|verify} messages.
         * @param m UserStandUpReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserStandUpReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserStandUpReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserStandUpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserStandUpReq;
    }

    /** Properties of a UserStandUpResp. */
    interface IUserStandUpResp {

        /** UserStandUpResp Code */
        Code?: (game.ReturnCode|null);

        /** UserStandUpResp Msg */
        Msg?: (string|null);
    }

    /** Represents a UserStandUpResp. */
    class UserStandUpResp implements IUserStandUpResp {

        /**
         * Constructs a new UserStandUpResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserStandUpResp);

        /** UserStandUpResp Code. */
        public Code: game.ReturnCode;

        /** UserStandUpResp Msg. */
        public Msg: string;

        /**
         * Encodes the specified UserStandUpResp message. Does not implicitly {@link game.UserStandUpResp.verify|verify} messages.
         * @param m UserStandUpResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserStandUpResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserStandUpResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserStandUpResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserStandUpResp;
    }

    /** Properties of a UserTransferInReq. */
    interface IUserTransferInReq {

        /** UserTransferInReq Amount */
        Amount?: (number|null);

        /** UserTransferInReq RoomID */
        RoomID?: (number|null);

        /** UserTransferInReq TableID */
        TableID?: (number|null);
    }

    /** Represents a UserTransferInReq. */
    class UserTransferInReq implements IUserTransferInReq {

        /**
         * Constructs a new UserTransferInReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserTransferInReq);

        /** UserTransferInReq Amount. */
        public Amount: number;

        /** UserTransferInReq RoomID. */
        public RoomID: number;

        /** UserTransferInReq TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserTransferInReq message. Does not implicitly {@link game.UserTransferInReq.verify|verify} messages.
         * @param m UserTransferInReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserTransferInReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserTransferInReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserTransferInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserTransferInReq;
    }

    /** Properties of a UserTransferInResp. */
    interface IUserTransferInResp {

        /** UserTransferInResp Code */
        Code?: (game.ReturnCode|null);

        /** UserTransferInResp Msg */
        Msg?: (string|null);
    }

    /** Represents a UserTransferInResp. */
    class UserTransferInResp implements IUserTransferInResp {

        /**
         * Constructs a new UserTransferInResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserTransferInResp);

        /** UserTransferInResp Code. */
        public Code: game.ReturnCode;

        /** UserTransferInResp Msg. */
        public Msg: string;

        /**
         * Encodes the specified UserTransferInResp message. Does not implicitly {@link game.UserTransferInResp.verify|verify} messages.
         * @param m UserTransferInResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserTransferInResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserTransferInResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserTransferInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserTransferInResp;
    }

    /** Properties of a UserTransferOutReq. */
    interface IUserTransferOutReq {

        /** UserTransferOutReq Amount */
        Amount?: (number|null);

        /** UserTransferOutReq RoomID */
        RoomID?: (number|null);

        /** UserTransferOutReq TableID */
        TableID?: (number|null);
    }

    /** Represents a UserTransferOutReq. */
    class UserTransferOutReq implements IUserTransferOutReq {

        /**
         * Constructs a new UserTransferOutReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserTransferOutReq);

        /** UserTransferOutReq Amount. */
        public Amount: number;

        /** UserTransferOutReq RoomID. */
        public RoomID: number;

        /** UserTransferOutReq TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserTransferOutReq message. Does not implicitly {@link game.UserTransferOutReq.verify|verify} messages.
         * @param m UserTransferOutReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserTransferOutReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserTransferOutReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserTransferOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserTransferOutReq;
    }

    /** Properties of a UserTransferOutResp. */
    interface IUserTransferOutResp {

        /** UserTransferOutResp Code */
        Code?: (game.ReturnCode|null);

        /** UserTransferOutResp Msg */
        Msg?: (string|null);
    }

    /** Represents a UserTransferOutResp. */
    class UserTransferOutResp implements IUserTransferOutResp {

        /**
         * Constructs a new UserTransferOutResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserTransferOutResp);

        /** UserTransferOutResp Code. */
        public Code: game.ReturnCode;

        /** UserTransferOutResp Msg. */
        public Msg: string;

        /**
         * Encodes the specified UserTransferOutResp message. Does not implicitly {@link game.UserTransferOutResp.verify|verify} messages.
         * @param m UserTransferOutResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserTransferOutResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserTransferOutResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserTransferOutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserTransferOutResp;
    }

    /** Properties of a UserFoldReq. */
    interface IUserFoldReq {

        /** UserFoldReq StepNumber */
        StepNumber?: (number|null);

        /** UserFoldReq RoomID */
        RoomID?: (number|null);

        /** UserFoldReq TableID */
        TableID?: (number|null);
    }

    /** Represents a UserFoldReq. */
    class UserFoldReq implements IUserFoldReq {

        /**
         * Constructs a new UserFoldReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserFoldReq);

        /** UserFoldReq StepNumber. */
        public StepNumber: number;

        /** UserFoldReq RoomID. */
        public RoomID: number;

        /** UserFoldReq TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserFoldReq message. Does not implicitly {@link game.UserFoldReq.verify|verify} messages.
         * @param m UserFoldReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserFoldReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserFoldReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserFoldReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserFoldReq;
    }

    /** Properties of a UserFoldResp. */
    interface IUserFoldResp {

        /** UserFoldResp Code */
        Code?: (game.ReturnCode|null);

        /** UserFoldResp Msg */
        Msg?: (string|null);
    }

    /** Represents a UserFoldResp. */
    class UserFoldResp implements IUserFoldResp {

        /**
         * Constructs a new UserFoldResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserFoldResp);

        /** UserFoldResp Code. */
        public Code: game.ReturnCode;

        /** UserFoldResp Msg. */
        public Msg: string;

        /**
         * Encodes the specified UserFoldResp message. Does not implicitly {@link game.UserFoldResp.verify|verify} messages.
         * @param m UserFoldResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserFoldResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserFoldResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserFoldResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserFoldResp;
    }

    /** Properties of a UserBetReq. */
    interface IUserBetReq {

        /** UserBetReq Amount */
        Amount?: (number|null);

        /** UserBetReq StepNumber */
        StepNumber?: (number|null);

        /** UserBetReq RoomID */
        RoomID?: (number|null);

        /** UserBetReq TableID */
        TableID?: (number|null);
    }

    /** Represents a UserBetReq. */
    class UserBetReq implements IUserBetReq {

        /**
         * Constructs a new UserBetReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserBetReq);

        /** UserBetReq Amount. */
        public Amount: number;

        /** UserBetReq StepNumber. */
        public StepNumber: number;

        /** UserBetReq RoomID. */
        public RoomID: number;

        /** UserBetReq TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserBetReq message. Does not implicitly {@link game.UserBetReq.verify|verify} messages.
         * @param m UserBetReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserBetReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserBetReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserBetReq;
    }

    /** Properties of a UserBetResp. */
    interface IUserBetResp {

        /** UserBetResp Code */
        Code?: (game.ReturnCode|null);

        /** UserBetResp Msg */
        Msg?: (string|null);
    }

    /** Represents a UserBetResp. */
    class UserBetResp implements IUserBetResp {

        /**
         * Constructs a new UserBetResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserBetResp);

        /** UserBetResp Code. */
        public Code: game.ReturnCode;

        /** UserBetResp Msg. */
        public Msg: string;

        /**
         * Encodes the specified UserBetResp message. Does not implicitly {@link game.UserBetResp.verify|verify} messages.
         * @param m UserBetResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserBetResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserBetResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserBetResp;
    }

    /** Properties of a UserCallReq. */
    interface IUserCallReq {

        /** UserCallReq StepNumber */
        StepNumber?: (number|null);

        /** UserCallReq RoomID */
        RoomID?: (number|null);

        /** UserCallReq TableID */
        TableID?: (number|null);
    }

    /** Represents a UserCallReq. */
    class UserCallReq implements IUserCallReq {

        /**
         * Constructs a new UserCallReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserCallReq);

        /** UserCallReq StepNumber. */
        public StepNumber: number;

        /** UserCallReq RoomID. */
        public RoomID: number;

        /** UserCallReq TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserCallReq message. Does not implicitly {@link game.UserCallReq.verify|verify} messages.
         * @param m UserCallReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserCallReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserCallReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserCallReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserCallReq;
    }

    /** Properties of a UserCallResp. */
    interface IUserCallResp {

        /** UserCallResp Code */
        Code?: (game.ReturnCode|null);

        /** UserCallResp Msg */
        Msg?: (string|null);
    }

    /** Represents a UserCallResp. */
    class UserCallResp implements IUserCallResp {

        /**
         * Constructs a new UserCallResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserCallResp);

        /** UserCallResp Code. */
        public Code: game.ReturnCode;

        /** UserCallResp Msg. */
        public Msg: string;

        /**
         * Encodes the specified UserCallResp message. Does not implicitly {@link game.UserCallResp.verify|verify} messages.
         * @param m UserCallResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserCallResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserCallResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserCallResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserCallResp;
    }

    /** Properties of a UserRaiseReq. */
    interface IUserRaiseReq {

        /** UserRaiseReq Amount */
        Amount?: (number|null);

        /** UserRaiseReq StepNumber */
        StepNumber?: (number|null);

        /** UserRaiseReq RoomID */
        RoomID?: (number|null);

        /** UserRaiseReq TableID */
        TableID?: (number|null);
    }

    /** Represents a UserRaiseReq. */
    class UserRaiseReq implements IUserRaiseReq {

        /**
         * Constructs a new UserRaiseReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserRaiseReq);

        /** UserRaiseReq Amount. */
        public Amount: number;

        /** UserRaiseReq StepNumber. */
        public StepNumber: number;

        /** UserRaiseReq RoomID. */
        public RoomID: number;

        /** UserRaiseReq TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserRaiseReq message. Does not implicitly {@link game.UserRaiseReq.verify|verify} messages.
         * @param m UserRaiseReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserRaiseReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserRaiseReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserRaiseReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserRaiseReq;
    }

    /** Properties of a UserRaiseResp. */
    interface IUserRaiseResp {

        /** UserRaiseResp Code */
        Code?: (game.ReturnCode|null);

        /** UserRaiseResp Msg */
        Msg?: (string|null);
    }

    /** Represents a UserRaiseResp. */
    class UserRaiseResp implements IUserRaiseResp {

        /**
         * Constructs a new UserRaiseResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserRaiseResp);

        /** UserRaiseResp Code. */
        public Code: game.ReturnCode;

        /** UserRaiseResp Msg. */
        public Msg: string;

        /**
         * Encodes the specified UserRaiseResp message. Does not implicitly {@link game.UserRaiseResp.verify|verify} messages.
         * @param m UserRaiseResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserRaiseResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserRaiseResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserRaiseResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserRaiseResp;
    }

    /** Properties of a UserAllInReq. */
    interface IUserAllInReq {

        /** UserAllInReq StepNumber */
        StepNumber?: (number|null);

        /** UserAllInReq RoomID */
        RoomID?: (number|null);

        /** UserAllInReq TableID */
        TableID?: (number|null);
    }

    /** Represents a UserAllInReq. */
    class UserAllInReq implements IUserAllInReq {

        /**
         * Constructs a new UserAllInReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserAllInReq);

        /** UserAllInReq StepNumber. */
        public StepNumber: number;

        /** UserAllInReq RoomID. */
        public RoomID: number;

        /** UserAllInReq TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserAllInReq message. Does not implicitly {@link game.UserAllInReq.verify|verify} messages.
         * @param m UserAllInReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserAllInReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserAllInReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserAllInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserAllInReq;
    }

    /** Properties of a UserAllInResp. */
    interface IUserAllInResp {

        /** UserAllInResp Code */
        Code?: (game.ReturnCode|null);

        /** UserAllInResp Msg */
        Msg?: (string|null);
    }

    /** Represents a UserAllInResp. */
    class UserAllInResp implements IUserAllInResp {

        /**
         * Constructs a new UserAllInResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserAllInResp);

        /** UserAllInResp Code. */
        public Code: game.ReturnCode;

        /** UserAllInResp Msg. */
        public Msg: string;

        /**
         * Encodes the specified UserAllInResp message. Does not implicitly {@link game.UserAllInResp.verify|verify} messages.
         * @param m UserAllInResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserAllInResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserAllInResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserAllInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserAllInResp;
    }

    /** Properties of a UserCheckReq. */
    interface IUserCheckReq {

        /** UserCheckReq StepNumber */
        StepNumber?: (number|null);

        /** UserCheckReq RoomID */
        RoomID?: (number|null);

        /** UserCheckReq TableID */
        TableID?: (number|null);
    }

    /** Represents a UserCheckReq. */
    class UserCheckReq implements IUserCheckReq {

        /**
         * Constructs a new UserCheckReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserCheckReq);

        /** UserCheckReq StepNumber. */
        public StepNumber: number;

        /** UserCheckReq RoomID. */
        public RoomID: number;

        /** UserCheckReq TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserCheckReq message. Does not implicitly {@link game.UserCheckReq.verify|verify} messages.
         * @param m UserCheckReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserCheckReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserCheckReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserCheckReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserCheckReq;
    }

    /** Properties of a UserCheckResp. */
    interface IUserCheckResp {

        /** UserCheckResp Code */
        Code?: (game.ReturnCode|null);

        /** UserCheckResp Msg */
        Msg?: (string|null);
    }

    /** Represents a UserCheckResp. */
    class UserCheckResp implements IUserCheckResp {

        /**
         * Constructs a new UserCheckResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserCheckResp);

        /** UserCheckResp Code. */
        public Code: game.ReturnCode;

        /** UserCheckResp Msg. */
        public Msg: string;

        /**
         * Encodes the specified UserCheckResp message. Does not implicitly {@link game.UserCheckResp.verify|verify} messages.
         * @param m UserCheckResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserCheckResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserCheckResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserCheckResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserCheckResp;
    }

    /** Properties of a RecordListReq. */
    interface IRecordListReq {

        /** RecordListReq RoomID */
        RoomID?: (number|null);

        /** RecordListReq TableID */
        TableID?: (number|null);
    }

    /** Represents a RecordListReq. */
    class RecordListReq implements IRecordListReq {

        /**
         * Constructs a new RecordListReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IRecordListReq);

        /** RecordListReq RoomID. */
        public RoomID: number;

        /** RecordListReq TableID. */
        public TableID: number;

        /**
         * Encodes the specified RecordListReq message. Does not implicitly {@link game.RecordListReq.verify|verify} messages.
         * @param m RecordListReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IRecordListReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecordListReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RecordListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.RecordListReq;
    }

    /** Properties of a RecordListResp. */
    interface IRecordListResp {

        /** RecordListResp Code */
        Code?: (game.ReturnCode|null);

        /** RecordListResp RoomID */
        RoomID?: (number|null);

        /** RecordListResp TableID */
        TableID?: (number|null);

        /** RecordListResp list */
        list?: (game.IRecordListInfo[]|null);
    }

    /** Represents a RecordListResp. */
    class RecordListResp implements IRecordListResp {

        /**
         * Constructs a new RecordListResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IRecordListResp);

        /** RecordListResp Code. */
        public Code: game.ReturnCode;

        /** RecordListResp RoomID. */
        public RoomID: number;

        /** RecordListResp TableID. */
        public TableID: number;

        /** RecordListResp list. */
        public list: game.IRecordListInfo[];

        /**
         * Encodes the specified RecordListResp message. Does not implicitly {@link game.RecordListResp.verify|verify} messages.
         * @param m RecordListResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IRecordListResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecordListResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RecordListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.RecordListResp;
    }

    /** Properties of a RecordDetailsReq. */
    interface IRecordDetailsReq {

        /** RecordDetailsReq RoomID */
        RoomID?: (number|null);

        /** RecordDetailsReq TableID */
        TableID?: (number|null);

        /** RecordDetailsReq Index */
        Index?: (number|null);

        /** RecordDetailsReq Code */
        Code?: (string|null);
    }

    /** Represents a RecordDetailsReq. */
    class RecordDetailsReq implements IRecordDetailsReq {

        /**
         * Constructs a new RecordDetailsReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IRecordDetailsReq);

        /** RecordDetailsReq RoomID. */
        public RoomID: number;

        /** RecordDetailsReq TableID. */
        public TableID: number;

        /** RecordDetailsReq Index. */
        public Index: number;

        /** RecordDetailsReq Code. */
        public Code: string;

        /**
         * Encodes the specified RecordDetailsReq message. Does not implicitly {@link game.RecordDetailsReq.verify|verify} messages.
         * @param m RecordDetailsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IRecordDetailsReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecordDetailsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RecordDetailsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.RecordDetailsReq;
    }

    /** Properties of a RecordDetailsResp. */
    interface IRecordDetailsResp {

        /** RecordDetailsResp Code */
        Code?: (game.ReturnCode|null);

        /** RecordDetailsResp index */
        index?: (number|null);

        /** RecordDetailsResp code */
        code?: (string|null);

        /** RecordDetailsResp PreFlopActionList */
        PreFlopActionList?: (game.IUserActionNtc[]|null);

        /** RecordDetailsResp FlopActionList */
        FlopActionList?: (game.IUserActionNtc[]|null);

        /** RecordDetailsResp TurnActionList */
        TurnActionList?: (game.IUserActionNtc[]|null);

        /** RecordDetailsResp RiverActionList */
        RiverActionList?: (game.IUserActionNtc[]|null);

        /** RecordDetailsResp Results */
        Results?: (game.IUserGameResult[]|null);
    }

    /** Represents a RecordDetailsResp. */
    class RecordDetailsResp implements IRecordDetailsResp {

        /**
         * Constructs a new RecordDetailsResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IRecordDetailsResp);

        /** RecordDetailsResp Code. */
        public Code: game.ReturnCode;

        /** RecordDetailsResp index. */
        public index: number;

        /** RecordDetailsResp code. */
        public code: string;

        /** RecordDetailsResp PreFlopActionList. */
        public PreFlopActionList: game.IUserActionNtc[];

        /** RecordDetailsResp FlopActionList. */
        public FlopActionList: game.IUserActionNtc[];

        /** RecordDetailsResp TurnActionList. */
        public TurnActionList: game.IUserActionNtc[];

        /** RecordDetailsResp RiverActionList. */
        public RiverActionList: game.IUserActionNtc[];

        /** RecordDetailsResp Results. */
        public Results: game.IUserGameResult[];

        /**
         * Encodes the specified RecordDetailsResp message. Does not implicitly {@link game.RecordDetailsResp.verify|verify} messages.
         * @param m RecordDetailsResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IRecordDetailsResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecordDetailsResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RecordDetailsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.RecordDetailsResp;
    }

    /** Properties of an EmojiChatReq. */
    interface IEmojiChatReq {

        /** EmojiChatReq RoomID */
        RoomID?: (number|null);

        /** EmojiChatReq TableID */
        TableID?: (number|null);

        /** EmojiChatReq EmojiIndex */
        EmojiIndex?: (number|null);
    }

    /** Represents an EmojiChatReq. */
    class EmojiChatReq implements IEmojiChatReq {

        /**
         * Constructs a new EmojiChatReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.IEmojiChatReq);

        /** EmojiChatReq RoomID. */
        public RoomID: number;

        /** EmojiChatReq TableID. */
        public TableID: number;

        /** EmojiChatReq EmojiIndex. */
        public EmojiIndex: number;

        /**
         * Encodes the specified EmojiChatReq message. Does not implicitly {@link game.EmojiChatReq.verify|verify} messages.
         * @param m EmojiChatReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IEmojiChatReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EmojiChatReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EmojiChatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.EmojiChatReq;
    }

    /** Properties of an EmojiChatResp. */
    interface IEmojiChatResp {

        /** EmojiChatResp Code */
        Code?: (game.ReturnCode|null);
    }

    /** Represents an EmojiChatResp. */
    class EmojiChatResp implements IEmojiChatResp {

        /**
         * Constructs a new EmojiChatResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.IEmojiChatResp);

        /** EmojiChatResp Code. */
        public Code: game.ReturnCode;

        /**
         * Encodes the specified EmojiChatResp message. Does not implicitly {@link game.EmojiChatResp.verify|verify} messages.
         * @param m EmojiChatResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IEmojiChatResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EmojiChatResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EmojiChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.EmojiChatResp;
    }

    /** Properties of a TextChatReq. */
    interface ITextChatReq {

        /** TextChatReq RoomID */
        RoomID?: (number|null);

        /** TextChatReq TableID */
        TableID?: (number|null);

        /** TextChatReq Text */
        Text?: (string|null);
    }

    /** Represents a TextChatReq. */
    class TextChatReq implements ITextChatReq {

        /**
         * Constructs a new TextChatReq.
         * @param [p] Properties to set
         */
        constructor(p?: game.ITextChatReq);

        /** TextChatReq RoomID. */
        public RoomID: number;

        /** TextChatReq TableID. */
        public TableID: number;

        /** TextChatReq Text. */
        public Text: string;

        /**
         * Encodes the specified TextChatReq message. Does not implicitly {@link game.TextChatReq.verify|verify} messages.
         * @param m TextChatReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.ITextChatReq, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TextChatReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TextChatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.TextChatReq;
    }

    /** Properties of a TextChatResp. */
    interface ITextChatResp {

        /** TextChatResp Code */
        Code?: (game.ReturnCode|null);
    }

    /** Represents a TextChatResp. */
    class TextChatResp implements ITextChatResp {

        /**
         * Constructs a new TextChatResp.
         * @param [p] Properties to set
         */
        constructor(p?: game.ITextChatResp);

        /** TextChatResp Code. */
        public Code: game.ReturnCode;

        /**
         * Encodes the specified TextChatResp message. Does not implicitly {@link game.TextChatResp.verify|verify} messages.
         * @param m TextChatResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.ITextChatResp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TextChatResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TextChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.TextChatResp;
    }

    /** Properties of a UserSitDownNtc. */
    interface IUserSitDownNtc {

        /** UserSitDownNtc Code */
        Code?: (game.ReturnCode|null);

        /** UserSitDownNtc RoomUser */
        RoomUser?: (game.IGameUser|null);
    }

    /** Represents a UserSitDownNtc. */
    class UserSitDownNtc implements IUserSitDownNtc {

        /**
         * Constructs a new UserSitDownNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserSitDownNtc);

        /** UserSitDownNtc Code. */
        public Code: game.ReturnCode;

        /** UserSitDownNtc RoomUser. */
        public RoomUser?: (game.IGameUser|null);

        /**
         * Encodes the specified UserSitDownNtc message. Does not implicitly {@link game.UserSitDownNtc.verify|verify} messages.
         * @param m UserSitDownNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserSitDownNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserSitDownNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserSitDownNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserSitDownNtc;
    }

    /** Properties of a UserStandUpNtc. */
    interface IUserStandUpNtc {

        /** UserStandUpNtc Code */
        Code?: (game.ReturnCode|null);

        /** UserStandUpNtc UserID */
        UserID?: (number|null);

        /** UserStandUpNtc RoomID */
        RoomID?: (number|null);

        /** UserStandUpNtc TableID */
        TableID?: (number|null);

        /** UserStandUpNtc ChairID */
        ChairID?: (number|null);

        /** UserStandUpNtc Balance */
        Balance?: (number|null);
    }

    /** Represents a UserStandUpNtc. */
    class UserStandUpNtc implements IUserStandUpNtc {

        /**
         * Constructs a new UserStandUpNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserStandUpNtc);

        /** UserStandUpNtc Code. */
        public Code: game.ReturnCode;

        /** UserStandUpNtc UserID. */
        public UserID: number;

        /** UserStandUpNtc RoomID. */
        public RoomID: number;

        /** UserStandUpNtc TableID. */
        public TableID: number;

        /** UserStandUpNtc ChairID. */
        public ChairID: number;

        /** UserStandUpNtc Balance. */
        public Balance: number;

        /**
         * Encodes the specified UserStandUpNtc message. Does not implicitly {@link game.UserStandUpNtc.verify|verify} messages.
         * @param m UserStandUpNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserStandUpNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserStandUpNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserStandUpNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserStandUpNtc;
    }

    /** Properties of a UserTransferInNtc. */
    interface IUserTransferInNtc {

        /** UserTransferInNtc Code */
        Code?: (game.ReturnCode|null);

        /** UserTransferInNtc UserID */
        UserID?: (number|null);

        /** UserTransferInNtc RoomID */
        RoomID?: (number|null);

        /** UserTransferInNtc TableID */
        TableID?: (number|null);

        /** UserTransferInNtc Amount */
        Amount?: (number|null);

        /** UserTransferInNtc CurrScore */
        CurrScore?: (number|null);
    }

    /** Represents a UserTransferInNtc. */
    class UserTransferInNtc implements IUserTransferInNtc {

        /**
         * Constructs a new UserTransferInNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserTransferInNtc);

        /** UserTransferInNtc Code. */
        public Code: game.ReturnCode;

        /** UserTransferInNtc UserID. */
        public UserID: number;

        /** UserTransferInNtc RoomID. */
        public RoomID: number;

        /** UserTransferInNtc TableID. */
        public TableID: number;

        /** UserTransferInNtc Amount. */
        public Amount: number;

        /** UserTransferInNtc CurrScore. */
        public CurrScore: number;

        /**
         * Encodes the specified UserTransferInNtc message. Does not implicitly {@link game.UserTransferInNtc.verify|verify} messages.
         * @param m UserTransferInNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserTransferInNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserTransferInNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserTransferInNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserTransferInNtc;
    }

    /** Properties of a UserTransferOutNtc. */
    interface IUserTransferOutNtc {

        /** UserTransferOutNtc Code */
        Code?: (game.ReturnCode|null);

        /** UserTransferOutNtc UserID */
        UserID?: (number|null);

        /** UserTransferOutNtc RoomID */
        RoomID?: (number|null);

        /** UserTransferOutNtc TableID */
        TableID?: (number|null);

        /** UserTransferOutNtc Amount */
        Amount?: (number|null);

        /** UserTransferOutNtc CurrScore */
        CurrScore?: (number|null);
    }

    /** Represents a UserTransferOutNtc. */
    class UserTransferOutNtc implements IUserTransferOutNtc {

        /**
         * Constructs a new UserTransferOutNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserTransferOutNtc);

        /** UserTransferOutNtc Code. */
        public Code: game.ReturnCode;

        /** UserTransferOutNtc UserID. */
        public UserID: number;

        /** UserTransferOutNtc RoomID. */
        public RoomID: number;

        /** UserTransferOutNtc TableID. */
        public TableID: number;

        /** UserTransferOutNtc Amount. */
        public Amount: number;

        /** UserTransferOutNtc CurrScore. */
        public CurrScore: number;

        /**
         * Encodes the specified UserTransferOutNtc message. Does not implicitly {@link game.UserTransferOutNtc.verify|verify} messages.
         * @param m UserTransferOutNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserTransferOutNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserTransferOutNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserTransferOutNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserTransferOutNtc;
    }

    /** Properties of a UserFoldNtc. */
    interface IUserFoldNtc {

        /** UserFoldNtc Code */
        Code?: (game.ReturnCode|null);

        /** UserFoldNtc UserID */
        UserID?: (number|null);

        /** UserFoldNtc RoomID */
        RoomID?: (number|null);

        /** UserFoldNtc TableID */
        TableID?: (number|null);
    }

    /** Represents a UserFoldNtc. */
    class UserFoldNtc implements IUserFoldNtc {

        /**
         * Constructs a new UserFoldNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserFoldNtc);

        /** UserFoldNtc Code. */
        public Code: game.ReturnCode;

        /** UserFoldNtc UserID. */
        public UserID: number;

        /** UserFoldNtc RoomID. */
        public RoomID: number;

        /** UserFoldNtc TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserFoldNtc message. Does not implicitly {@link game.UserFoldNtc.verify|verify} messages.
         * @param m UserFoldNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserFoldNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserFoldNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserFoldNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserFoldNtc;
    }

    /** Properties of a UserBetNtc. */
    interface IUserBetNtc {

        /** UserBetNtc Code */
        Code?: (game.ReturnCode|null);

        /** UserBetNtc UserID */
        UserID?: (number|null);

        /** UserBetNtc RoomID */
        RoomID?: (number|null);

        /** UserBetNtc TableID */
        TableID?: (number|null);
    }

    /** Represents a UserBetNtc. */
    class UserBetNtc implements IUserBetNtc {

        /**
         * Constructs a new UserBetNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserBetNtc);

        /** UserBetNtc Code. */
        public Code: game.ReturnCode;

        /** UserBetNtc UserID. */
        public UserID: number;

        /** UserBetNtc RoomID. */
        public RoomID: number;

        /** UserBetNtc TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserBetNtc message. Does not implicitly {@link game.UserBetNtc.verify|verify} messages.
         * @param m UserBetNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserBetNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserBetNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserBetNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserBetNtc;
    }

    /** Properties of a UserCallNtc. */
    interface IUserCallNtc {

        /** UserCallNtc Code */
        Code?: (game.ReturnCode|null);

        /** UserCallNtc UserID */
        UserID?: (number|null);

        /** UserCallNtc RoomID */
        RoomID?: (number|null);

        /** UserCallNtc TableID */
        TableID?: (number|null);
    }

    /** Represents a UserCallNtc. */
    class UserCallNtc implements IUserCallNtc {

        /**
         * Constructs a new UserCallNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserCallNtc);

        /** UserCallNtc Code. */
        public Code: game.ReturnCode;

        /** UserCallNtc UserID. */
        public UserID: number;

        /** UserCallNtc RoomID. */
        public RoomID: number;

        /** UserCallNtc TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserCallNtc message. Does not implicitly {@link game.UserCallNtc.verify|verify} messages.
         * @param m UserCallNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserCallNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserCallNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserCallNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserCallNtc;
    }

    /** Properties of a UserRaiseNtc. */
    interface IUserRaiseNtc {

        /** UserRaiseNtc Code */
        Code?: (game.ReturnCode|null);

        /** UserRaiseNtc UserID */
        UserID?: (number|null);

        /** UserRaiseNtc RoomID */
        RoomID?: (number|null);

        /** UserRaiseNtc TableID */
        TableID?: (number|null);
    }

    /** Represents a UserRaiseNtc. */
    class UserRaiseNtc implements IUserRaiseNtc {

        /**
         * Constructs a new UserRaiseNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserRaiseNtc);

        /** UserRaiseNtc Code. */
        public Code: game.ReturnCode;

        /** UserRaiseNtc UserID. */
        public UserID: number;

        /** UserRaiseNtc RoomID. */
        public RoomID: number;

        /** UserRaiseNtc TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserRaiseNtc message. Does not implicitly {@link game.UserRaiseNtc.verify|verify} messages.
         * @param m UserRaiseNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserRaiseNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserRaiseNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserRaiseNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserRaiseNtc;
    }

    /** Properties of a UserAllInNtc. */
    interface IUserAllInNtc {

        /** UserAllInNtc Code */
        Code?: (game.ReturnCode|null);

        /** UserAllInNtc UserID */
        UserID?: (number|null);

        /** UserAllInNtc RoomID */
        RoomID?: (number|null);

        /** UserAllInNtc TableID */
        TableID?: (number|null);
    }

    /** Represents a UserAllInNtc. */
    class UserAllInNtc implements IUserAllInNtc {

        /**
         * Constructs a new UserAllInNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserAllInNtc);

        /** UserAllInNtc Code. */
        public Code: game.ReturnCode;

        /** UserAllInNtc UserID. */
        public UserID: number;

        /** UserAllInNtc RoomID. */
        public RoomID: number;

        /** UserAllInNtc TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserAllInNtc message. Does not implicitly {@link game.UserAllInNtc.verify|verify} messages.
         * @param m UserAllInNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserAllInNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserAllInNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserAllInNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserAllInNtc;
    }

    /** Properties of a UserCheckNtc. */
    interface IUserCheckNtc {

        /** UserCheckNtc Code */
        Code?: (game.ReturnCode|null);

        /** UserCheckNtc UserID */
        UserID?: (number|null);

        /** UserCheckNtc RoomID */
        RoomID?: (number|null);

        /** UserCheckNtc TableID */
        TableID?: (number|null);
    }

    /** Represents a UserCheckNtc. */
    class UserCheckNtc implements IUserCheckNtc {

        /**
         * Constructs a new UserCheckNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserCheckNtc);

        /** UserCheckNtc Code. */
        public Code: game.ReturnCode;

        /** UserCheckNtc UserID. */
        public UserID: number;

        /** UserCheckNtc RoomID. */
        public RoomID: number;

        /** UserCheckNtc TableID. */
        public TableID: number;

        /**
         * Encodes the specified UserCheckNtc message. Does not implicitly {@link game.UserCheckNtc.verify|verify} messages.
         * @param m UserCheckNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserCheckNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserCheckNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserCheckNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserCheckNtc;
    }

    /** Properties of a JoinTableNtc. */
    interface IJoinTableNtc {

        /** JoinTableNtc Code */
        Code?: (game.ReturnCode|null);

        /** JoinTableNtc RoomUser */
        RoomUser?: (game.IGameUser|null);
    }

    /** Represents a JoinTableNtc. */
    class JoinTableNtc implements IJoinTableNtc {

        /**
         * Constructs a new JoinTableNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IJoinTableNtc);

        /** JoinTableNtc Code. */
        public Code: game.ReturnCode;

        /** JoinTableNtc RoomUser. */
        public RoomUser?: (game.IGameUser|null);

        /**
         * Encodes the specified JoinTableNtc message. Does not implicitly {@link game.JoinTableNtc.verify|verify} messages.
         * @param m JoinTableNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IJoinTableNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinTableNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns JoinTableNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.JoinTableNtc;
    }

    /** Properties of a LeaveTableNtc. */
    interface ILeaveTableNtc {

        /** LeaveTableNtc Code */
        Code?: (game.ReturnCode|null);

        /** LeaveTableNtc UserID */
        UserID?: (number|null);

        /** LeaveTableNtc RoomID */
        RoomID?: (number|null);

        /** LeaveTableNtc TableID */
        TableID?: (number|null);

        /** LeaveTableNtc Balance */
        Balance?: (number|null);
    }

    /** Represents a LeaveTableNtc. */
    class LeaveTableNtc implements ILeaveTableNtc {

        /**
         * Constructs a new LeaveTableNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.ILeaveTableNtc);

        /** LeaveTableNtc Code. */
        public Code: game.ReturnCode;

        /** LeaveTableNtc UserID. */
        public UserID: number;

        /** LeaveTableNtc RoomID. */
        public RoomID: number;

        /** LeaveTableNtc TableID. */
        public TableID: number;

        /** LeaveTableNtc Balance. */
        public Balance: number;

        /**
         * Encodes the specified LeaveTableNtc message. Does not implicitly {@link game.LeaveTableNtc.verify|verify} messages.
         * @param m LeaveTableNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.ILeaveTableNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LeaveTableNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LeaveTableNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.LeaveTableNtc;
    }

    /** Properties of a UserAssetsChangeNtc. */
    interface IUserAssetsChangeNtc {

        /** UserAssetsChangeNtc UserID */
        UserID?: (number|null);

        /** UserAssetsChangeNtc RoomID */
        RoomID?: (number|null);

        /** UserAssetsChangeNtc TableID */
        TableID?: (number|null);

        /** UserAssetsChangeNtc ChairID */
        ChairID?: (number|null);

        /** UserAssetsChangeNtc CurrScore */
        CurrScore?: (number|null);
    }

    /** Represents a UserAssetsChangeNtc. */
    class UserAssetsChangeNtc implements IUserAssetsChangeNtc {

        /**
         * Constructs a new UserAssetsChangeNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserAssetsChangeNtc);

        /** UserAssetsChangeNtc UserID. */
        public UserID: number;

        /** UserAssetsChangeNtc RoomID. */
        public RoomID: number;

        /** UserAssetsChangeNtc TableID. */
        public TableID: number;

        /** UserAssetsChangeNtc ChairID. */
        public ChairID: number;

        /** UserAssetsChangeNtc CurrScore. */
        public CurrScore: number;

        /**
         * Encodes the specified UserAssetsChangeNtc message. Does not implicitly {@link game.UserAssetsChangeNtc.verify|verify} messages.
         * @param m UserAssetsChangeNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserAssetsChangeNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserAssetsChangeNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserAssetsChangeNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserAssetsChangeNtc;
    }

    /** Properties of a GameCountdownNtc. */
    interface IGameCountdownNtc {

        /** GameCountdownNtc RoomID */
        RoomID?: (number|null);

        /** GameCountdownNtc TableID */
        TableID?: (number|null);

        /** GameCountdownNtc Countdown */
        Countdown?: (number|null);
    }

    /** Represents a GameCountdownNtc. */
    class GameCountdownNtc implements IGameCountdownNtc {

        /**
         * Constructs a new GameCountdownNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IGameCountdownNtc);

        /** GameCountdownNtc RoomID. */
        public RoomID: number;

        /** GameCountdownNtc TableID. */
        public TableID: number;

        /** GameCountdownNtc Countdown. */
        public Countdown: number;

        /**
         * Encodes the specified GameCountdownNtc message. Does not implicitly {@link game.GameCountdownNtc.verify|verify} messages.
         * @param m GameCountdownNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IGameCountdownNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameCountdownNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameCountdownNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.GameCountdownNtc;
    }

    /** Properties of a GameStartNtc. */
    interface IGameStartNtc {

        /** GameStartNtc RoomID */
        RoomID?: (number|null);

        /** GameStartNtc TableID */
        TableID?: (number|null);

        /** GameStartNtc ButtonChairID */
        ButtonChairID?: (number|null);

        /** GameStartNtc SmallBlindChairID */
        SmallBlindChairID?: (number|null);

        /** GameStartNtc BigBlindChairID */
        BigBlindChairID?: (number|null);

        /** GameStartNtc SmallBlindAmount */
        SmallBlindAmount?: (number|null);

        /** GameStartNtc BigBlindAmount */
        BigBlindAmount?: (number|null);

        /** GameStartNtc UserIds */
        UserIds?: (number[]|null);

        /** GameStartNtc GameState */
        GameState?: (game.GameState|null);
    }

    /** Represents a GameStartNtc. */
    class GameStartNtc implements IGameStartNtc {

        /**
         * Constructs a new GameStartNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IGameStartNtc);

        /** GameStartNtc RoomID. */
        public RoomID: number;

        /** GameStartNtc TableID. */
        public TableID: number;

        /** GameStartNtc ButtonChairID. */
        public ButtonChairID: number;

        /** GameStartNtc SmallBlindChairID. */
        public SmallBlindChairID: number;

        /** GameStartNtc BigBlindChairID. */
        public BigBlindChairID: number;

        /** GameStartNtc SmallBlindAmount. */
        public SmallBlindAmount: number;

        /** GameStartNtc BigBlindAmount. */
        public BigBlindAmount: number;

        /** GameStartNtc UserIds. */
        public UserIds: number[];

        /** GameStartNtc GameState. */
        public GameState: game.GameState;

        /**
         * Encodes the specified GameStartNtc message. Does not implicitly {@link game.GameStartNtc.verify|verify} messages.
         * @param m GameStartNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IGameStartNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameStartNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameStartNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.GameStartNtc;
    }

    /** Properties of a GameRoundStartNtc. */
    interface IGameRoundStartNtc {

        /** GameRoundStartNtc RoomID */
        RoomID?: (number|null);

        /** GameRoundStartNtc TableID */
        TableID?: (number|null);

        /** GameRoundStartNtc GameRound */
        GameRound?: (game.GameRound|null);
    }

    /** Represents a GameRoundStartNtc. */
    class GameRoundStartNtc implements IGameRoundStartNtc {

        /**
         * Constructs a new GameRoundStartNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IGameRoundStartNtc);

        /** GameRoundStartNtc RoomID. */
        public RoomID: number;

        /** GameRoundStartNtc TableID. */
        public TableID: number;

        /** GameRoundStartNtc GameRound. */
        public GameRound: game.GameRound;

        /**
         * Encodes the specified GameRoundStartNtc message. Does not implicitly {@link game.GameRoundStartNtc.verify|verify} messages.
         * @param m GameRoundStartNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IGameRoundStartNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameRoundStartNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameRoundStartNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.GameRoundStartNtc;
    }

    /** Properties of a UserTurnStartNtc. */
    interface IUserTurnStartNtc {

        /** UserTurnStartNtc UserID */
        UserID?: (number|null);

        /** UserTurnStartNtc UserScore */
        UserScore?: (number|null);

        /** UserTurnStartNtc RoomID */
        RoomID?: (number|null);

        /** UserTurnStartNtc TableID */
        TableID?: (number|null);

        /** UserTurnStartNtc ChairID */
        ChairID?: (number|null);

        /** UserTurnStartNtc BetMinAmount */
        BetMinAmount?: (number|null);

        /** UserTurnStartNtc CallAmount */
        CallAmount?: (number|null);

        /** UserTurnStartNtc RaiseMinAmount */
        RaiseMinAmount?: (number|null);

        /** UserTurnStartNtc currValidActions */
        currValidActions?: (game.UserActionKind[]|null);

        /** UserTurnStartNtc StepNumber */
        StepNumber?: (number|null);

        /** UserTurnStartNtc Countdown */
        Countdown?: (number|null);
    }

    /** Represents a UserTurnStartNtc. */
    class UserTurnStartNtc implements IUserTurnStartNtc {

        /**
         * Constructs a new UserTurnStartNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserTurnStartNtc);

        /** UserTurnStartNtc UserID. */
        public UserID: number;

        /** UserTurnStartNtc UserScore. */
        public UserScore: number;

        /** UserTurnStartNtc RoomID. */
        public RoomID: number;

        /** UserTurnStartNtc TableID. */
        public TableID: number;

        /** UserTurnStartNtc ChairID. */
        public ChairID: number;

        /** UserTurnStartNtc BetMinAmount. */
        public BetMinAmount: number;

        /** UserTurnStartNtc CallAmount. */
        public CallAmount: number;

        /** UserTurnStartNtc RaiseMinAmount. */
        public RaiseMinAmount: number;

        /** UserTurnStartNtc currValidActions. */
        public currValidActions: game.UserActionKind[];

        /** UserTurnStartNtc StepNumber. */
        public StepNumber: number;

        /** UserTurnStartNtc Countdown. */
        public Countdown: number;

        /**
         * Encodes the specified UserTurnStartNtc message. Does not implicitly {@link game.UserTurnStartNtc.verify|verify} messages.
         * @param m UserTurnStartNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserTurnStartNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserTurnStartNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserTurnStartNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserTurnStartNtc;
    }

    /** Properties of a UserActionNtc. */
    interface IUserActionNtc {

        /** UserActionNtc UserID */
        UserID?: (number|null);

        /** UserActionNtc RoomID */
        RoomID?: (number|null);

        /** UserActionNtc TableID */
        TableID?: (number|null);

        /** UserActionNtc ChairID */
        ChairID?: (number|null);

        /** UserActionNtc UserAction */
        UserAction?: (game.UserActionKind|null);

        /** UserActionNtc Amount */
        Amount?: (number|null);

        /** UserActionNtc CurrScore */
        CurrScore?: (number|null);

        /** UserActionNtc RoundBetAmount */
        RoundBetAmount?: (number|null);

        /** UserActionNtc HoldCards */
        HoldCards?: (Uint8Array|null);
    }

    /** Represents a UserActionNtc. */
    class UserActionNtc implements IUserActionNtc {

        /**
         * Constructs a new UserActionNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserActionNtc);

        /** UserActionNtc UserID. */
        public UserID: number;

        /** UserActionNtc RoomID. */
        public RoomID: number;

        /** UserActionNtc TableID. */
        public TableID: number;

        /** UserActionNtc ChairID. */
        public ChairID: number;

        /** UserActionNtc UserAction. */
        public UserAction: game.UserActionKind;

        /** UserActionNtc Amount. */
        public Amount: number;

        /** UserActionNtc CurrScore. */
        public CurrScore: number;

        /** UserActionNtc RoundBetAmount. */
        public RoundBetAmount: number;

        /** UserActionNtc HoldCards. */
        public HoldCards: Uint8Array;

        /**
         * Encodes the specified UserActionNtc message. Does not implicitly {@link game.UserActionNtc.verify|verify} messages.
         * @param m UserActionNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserActionNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserActionNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserActionNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserActionNtc;
    }

    /** Properties of a DealHoleCardsNtc. */
    interface IDealHoleCardsNtc {

        /** DealHoleCardsNtc RoomID */
        RoomID?: (number|null);

        /** DealHoleCardsNtc TableID */
        TableID?: (number|null);
    }

    /** Represents a DealHoleCardsNtc. */
    class DealHoleCardsNtc implements IDealHoleCardsNtc {

        /**
         * Constructs a new DealHoleCardsNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IDealHoleCardsNtc);

        /** DealHoleCardsNtc RoomID. */
        public RoomID: number;

        /** DealHoleCardsNtc TableID. */
        public TableID: number;

        /**
         * Encodes the specified DealHoleCardsNtc message. Does not implicitly {@link game.DealHoleCardsNtc.verify|verify} messages.
         * @param m DealHoleCardsNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IDealHoleCardsNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DealHoleCardsNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DealHoleCardsNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.DealHoleCardsNtc;
    }

    /** Properties of a UserDealHoleCardsNtc. */
    interface IUserDealHoleCardsNtc {

        /** UserDealHoleCardsNtc UserID */
        UserID?: (number|null);

        /** UserDealHoleCardsNtc RoomID */
        RoomID?: (number|null);

        /** UserDealHoleCardsNtc TableID */
        TableID?: (number|null);

        /** UserDealHoleCardsNtc HoldCards */
        HoldCards?: (Uint8Array|null);
    }

    /** Represents a UserDealHoleCardsNtc. */
    class UserDealHoleCardsNtc implements IUserDealHoleCardsNtc {

        /**
         * Constructs a new UserDealHoleCardsNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserDealHoleCardsNtc);

        /** UserDealHoleCardsNtc UserID. */
        public UserID: number;

        /** UserDealHoleCardsNtc RoomID. */
        public RoomID: number;

        /** UserDealHoleCardsNtc TableID. */
        public TableID: number;

        /** UserDealHoleCardsNtc HoldCards. */
        public HoldCards: Uint8Array;

        /**
         * Encodes the specified UserDealHoleCardsNtc message. Does not implicitly {@link game.UserDealHoleCardsNtc.verify|verify} messages.
         * @param m UserDealHoleCardsNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserDealHoleCardsNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserDealHoleCardsNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserDealHoleCardsNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserDealHoleCardsNtc;
    }

    /** Properties of a DealCommunityCardsNtc. */
    interface IDealCommunityCardsNtc {

        /** DealCommunityCardsNtc RoomID */
        RoomID?: (number|null);

        /** DealCommunityCardsNtc TableID */
        TableID?: (number|null);

        /** DealCommunityCardsNtc CommunityCards */
        CommunityCards?: (Uint8Array|null);
    }

    /** Represents a DealCommunityCardsNtc. */
    class DealCommunityCardsNtc implements IDealCommunityCardsNtc {

        /**
         * Constructs a new DealCommunityCardsNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IDealCommunityCardsNtc);

        /** DealCommunityCardsNtc RoomID. */
        public RoomID: number;

        /** DealCommunityCardsNtc TableID. */
        public TableID: number;

        /** DealCommunityCardsNtc CommunityCards. */
        public CommunityCards: Uint8Array;

        /**
         * Encodes the specified DealCommunityCardsNtc message. Does not implicitly {@link game.DealCommunityCardsNtc.verify|verify} messages.
         * @param m DealCommunityCardsNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IDealCommunityCardsNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DealCommunityCardsNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DealCommunityCardsNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.DealCommunityCardsNtc;
    }

    /** Properties of a GetGameSceneNtc. */
    interface IGetGameSceneNtc {

        /** GetGameSceneNtc Code */
        Code?: (game.ReturnCode|null);

        /** GetGameSceneNtc UserID */
        UserID?: (number|null);

        /** GetGameSceneNtc RoomID */
        RoomID?: (number|null);

        /** GetGameSceneNtc TableID */
        TableID?: (number|null);

        /** GetGameSceneNtc GameState */
        GameState?: (game.GameState|null);

        /** GetGameSceneNtc CurrScore */
        CurrScore?: (number|null);

        /** GetGameSceneNtc MinTransferIn */
        MinTransferIn?: (number|null);

        /** GetGameSceneNtc MaxTransferIn */
        MaxTransferIn?: (number|null);

        /** GetGameSceneNtc TableUsers */
        TableUsers?: (game.IGameUser[]|null);

        /** GetGameSceneNtc FreeCharis */
        FreeCharis?: (number[]|null);

        /** GetGameSceneNtc AudienceUsers */
        AudienceUsers?: (game.IGameUser[]|null);

        /** GetGameSceneNtc GameRound */
        GameRound?: (game.GameRound|null);

        /** GetGameSceneNtc UserIDs */
        UserIDs?: (number[]|null);

        /** GetGameSceneNtc HoldCards */
        HoldCards?: (Uint8Array|null);

        /** GetGameSceneNtc CommunityCards */
        CommunityCards?: (Uint8Array|null);

        /** GetGameSceneNtc UserTurn */
        UserTurn?: (game.IUserTurnStartNtc|null);

        /** GetGameSceneNtc PreFlopActionList */
        PreFlopActionList?: (game.IUserActionNtc[]|null);

        /** GetGameSceneNtc FlopActionList */
        FlopActionList?: (game.IUserActionNtc[]|null);

        /** GetGameSceneNtc TurnActionList */
        TurnActionList?: (game.IUserActionNtc[]|null);

        /** GetGameSceneNtc RiverActionList */
        RiverActionList?: (game.IUserActionNtc[]|null);

        /** GetGameSceneNtc ButtonChairID */
        ButtonChairID?: (number|null);

        /** GetGameSceneNtc SmallBlindAmount */
        SmallBlindAmount?: (number|null);

        /** GetGameSceneNtc BigBlindAmount */
        BigBlindAmount?: (number|null);

        /** GetGameSceneNtc PotInfos */
        PotInfos?: (game.IPotInfo[]|null);

        /** GetGameSceneNtc GameID */
        GameID?: (number|null);

        /** GetGameSceneNtc RoomName */
        RoomName?: (string|null);

        /** GetGameSceneNtc EnterAmount */
        EnterAmount?: (number|null);

        /** GetGameSceneNtc TransferFees */
        TransferFees?: (number|null);
    }

    /** Represents a GetGameSceneNtc. */
    class GetGameSceneNtc implements IGetGameSceneNtc {

        /**
         * Constructs a new GetGameSceneNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IGetGameSceneNtc);

        /** GetGameSceneNtc Code. */
        public Code: game.ReturnCode;

        /** GetGameSceneNtc UserID. */
        public UserID: number;

        /** GetGameSceneNtc RoomID. */
        public RoomID: number;

        /** GetGameSceneNtc TableID. */
        public TableID: number;

        /** GetGameSceneNtc GameState. */
        public GameState: game.GameState;

        /** GetGameSceneNtc CurrScore. */
        public CurrScore: number;

        /** GetGameSceneNtc MinTransferIn. */
        public MinTransferIn: number;

        /** GetGameSceneNtc MaxTransferIn. */
        public MaxTransferIn: number;

        /** GetGameSceneNtc TableUsers. */
        public TableUsers: game.IGameUser[];

        /** GetGameSceneNtc FreeCharis. */
        public FreeCharis: number[];

        /** GetGameSceneNtc AudienceUsers. */
        public AudienceUsers: game.IGameUser[];

        /** GetGameSceneNtc GameRound. */
        public GameRound: game.GameRound;

        /** GetGameSceneNtc UserIDs. */
        public UserIDs: number[];

        /** GetGameSceneNtc HoldCards. */
        public HoldCards: Uint8Array;

        /** GetGameSceneNtc CommunityCards. */
        public CommunityCards: Uint8Array;

        /** GetGameSceneNtc UserTurn. */
        public UserTurn?: (game.IUserTurnStartNtc|null);

        /** GetGameSceneNtc PreFlopActionList. */
        public PreFlopActionList: game.IUserActionNtc[];

        /** GetGameSceneNtc FlopActionList. */
        public FlopActionList: game.IUserActionNtc[];

        /** GetGameSceneNtc TurnActionList. */
        public TurnActionList: game.IUserActionNtc[];

        /** GetGameSceneNtc RiverActionList. */
        public RiverActionList: game.IUserActionNtc[];

        /** GetGameSceneNtc ButtonChairID. */
        public ButtonChairID: number;

        /** GetGameSceneNtc SmallBlindAmount. */
        public SmallBlindAmount: number;

        /** GetGameSceneNtc BigBlindAmount. */
        public BigBlindAmount: number;

        /** GetGameSceneNtc PotInfos. */
        public PotInfos: game.IPotInfo[];

        /** GetGameSceneNtc GameID. */
        public GameID: number;

        /** GetGameSceneNtc RoomName. */
        public RoomName: string;

        /** GetGameSceneNtc EnterAmount. */
        public EnterAmount: number;

        /** GetGameSceneNtc TransferFees. */
        public TransferFees: number;

        /**
         * Encodes the specified GetGameSceneNtc message. Does not implicitly {@link game.GetGameSceneNtc.verify|verify} messages.
         * @param m GetGameSceneNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IGetGameSceneNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetGameSceneNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GetGameSceneNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.GetGameSceneNtc;
    }

    /** Properties of a PotInfo. */
    interface IPotInfo {

        /** PotInfo PotID */
        PotID?: (number|null);

        /** PotInfo Amount */
        Amount?: (number|null);
    }

    /** Represents a PotInfo. */
    class PotInfo implements IPotInfo {

        /**
         * Constructs a new PotInfo.
         * @param [p] Properties to set
         */
        constructor(p?: game.IPotInfo);

        /** PotInfo PotID. */
        public PotID: number;

        /** PotInfo Amount. */
        public Amount: number;

        /**
         * Encodes the specified PotInfo message. Does not implicitly {@link game.PotInfo.verify|verify} messages.
         * @param m PotInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IPotInfo, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PotInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.PotInfo;
    }

    /** Properties of a PotInfoNtc. */
    interface IPotInfoNtc {

        /** PotInfoNtc RoomID */
        RoomID?: (number|null);

        /** PotInfoNtc TableID */
        TableID?: (number|null);

        /** PotInfoNtc PotInfos */
        PotInfos?: (game.IPotInfo[]|null);
    }

    /** Represents a PotInfoNtc. */
    class PotInfoNtc implements IPotInfoNtc {

        /**
         * Constructs a new PotInfoNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IPotInfoNtc);

        /** PotInfoNtc RoomID. */
        public RoomID: number;

        /** PotInfoNtc TableID. */
        public TableID: number;

        /** PotInfoNtc PotInfos. */
        public PotInfos: game.IPotInfo[];

        /**
         * Encodes the specified PotInfoNtc message. Does not implicitly {@link game.PotInfoNtc.verify|verify} messages.
         * @param m PotInfoNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IPotInfoNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PotInfoNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PotInfoNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.PotInfoNtc;
    }

    /** Properties of a UserGameResult. */
    interface IUserGameResult {

        /** UserGameResult UserID */
        UserID?: (number|null);

        /** UserGameResult CurrScore */
        CurrScore?: (number|null);

        /** UserGameResult ScoreChangeAmount */
        ScoreChangeAmount?: (number|null);
    }

    /** Represents a UserGameResult. */
    class UserGameResult implements IUserGameResult {

        /**
         * Constructs a new UserGameResult.
         * @param [p] Properties to set
         */
        constructor(p?: game.IUserGameResult);

        /** UserGameResult UserID. */
        public UserID: number;

        /** UserGameResult CurrScore. */
        public CurrScore: number;

        /** UserGameResult ScoreChangeAmount. */
        public ScoreChangeAmount: number;

        /**
         * Encodes the specified UserGameResult message. Does not implicitly {@link game.UserGameResult.verify|verify} messages.
         * @param m UserGameResult message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IUserGameResult, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserGameResult message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.UserGameResult;
    }

    /** Properties of a GameEndNtc. */
    interface IGameEndNtc {

        /** GameEndNtc RoomID */
        RoomID?: (number|null);

        /** GameEndNtc TableID */
        TableID?: (number|null);

        /** GameEndNtc Results */
        Results?: (game.IUserGameResult[]|null);

        /** GameEndNtc GameState */
        GameState?: (game.GameState|null);
    }

    /** Represents a GameEndNtc. */
    class GameEndNtc implements IGameEndNtc {

        /**
         * Constructs a new GameEndNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IGameEndNtc);

        /** GameEndNtc RoomID. */
        public RoomID: number;

        /** GameEndNtc TableID. */
        public TableID: number;

        /** GameEndNtc Results. */
        public Results: game.IUserGameResult[];

        /** GameEndNtc GameState. */
        public GameState: game.GameState;

        /**
         * Encodes the specified GameEndNtc message. Does not implicitly {@link game.GameEndNtc.verify|verify} messages.
         * @param m GameEndNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IGameEndNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameEndNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameEndNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.GameEndNtc;
    }

    /** Properties of an EmojiChatNtc. */
    interface IEmojiChatNtc {

        /** EmojiChatNtc RoomID */
        RoomID?: (number|null);

        /** EmojiChatNtc TableID */
        TableID?: (number|null);

        /** EmojiChatNtc UserID */
        UserID?: (number|null);

        /** EmojiChatNtc EmojiIndex */
        EmojiIndex?: (number|null);
    }

    /** Represents an EmojiChatNtc. */
    class EmojiChatNtc implements IEmojiChatNtc {

        /**
         * Constructs a new EmojiChatNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.IEmojiChatNtc);

        /** EmojiChatNtc RoomID. */
        public RoomID: number;

        /** EmojiChatNtc TableID. */
        public TableID: number;

        /** EmojiChatNtc UserID. */
        public UserID: number;

        /** EmojiChatNtc EmojiIndex. */
        public EmojiIndex: number;

        /**
         * Encodes the specified EmojiChatNtc message. Does not implicitly {@link game.EmojiChatNtc.verify|verify} messages.
         * @param m EmojiChatNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IEmojiChatNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EmojiChatNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EmojiChatNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.EmojiChatNtc;
    }

    /** Properties of a TextChatNtc. */
    interface ITextChatNtc {

        /** TextChatNtc RoomID */
        RoomID?: (number|null);

        /** TextChatNtc TableID */
        TableID?: (number|null);

        /** TextChatNtc UserID */
        UserID?: (number|null);

        /** TextChatNtc Text */
        Text?: (string|null);
    }

    /** Represents a TextChatNtc. */
    class TextChatNtc implements ITextChatNtc {

        /**
         * Constructs a new TextChatNtc.
         * @param [p] Properties to set
         */
        constructor(p?: game.ITextChatNtc);

        /** TextChatNtc RoomID. */
        public RoomID: number;

        /** TextChatNtc TableID. */
        public TableID: number;

        /** TextChatNtc UserID. */
        public UserID: number;

        /** TextChatNtc Text. */
        public Text: string;

        /**
         * Encodes the specified TextChatNtc message. Does not implicitly {@link game.TextChatNtc.verify|verify} messages.
         * @param m TextChatNtc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.ITextChatNtc, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TextChatNtc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TextChatNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.TextChatNtc;
    }

    /** ReturnCode enum. */
    enum ReturnCode {
        Success = 0,
        InternalServerError = 10000,
        InvalidChairID = 20000,
        ErrorUserSeated = 21000,
        ErrorUserNotSeated = 21001,
        ErrorUserNotExists = 21002,
        ErrorUserEntered = 21003,
        ErrorUserNotEntered = 21004,
        ErrorTableNotExists = 22000,
        ErrorTableJoined = 22001,
        ErrorTableFullUsers = 22002,
        ErrorTableExists = 22003,
        ErrorTableNotJoined = 22004,
        ErrorChairOccupied = 23000,
        InvalidTransferAmount = 24000,
        InvalidUserAction = 25000,
        ErrorUserPlaying = 30000,
        ErrorInsufficientBalance = 30100,
        ErrorEnterAmount = 30101,
        ErrorActionTimeout = 30200
    }

    /** GameState enum. */
    enum GameState {
        GameInvalid = 0,
        GameFree = 10,
        GamePlaying = 20,
        GameEND = 30
    }

    /** UserState enum. */
    enum UserState {
        UserInvalid = 0,
        UserFree = 10,
        UserPlaying = 20,
        UserFold = 30
    }

    /** GameRound enum. */
    enum GameRound {
        RoundInvalid = 0,
        RoundPreFlop = 1,
        RoundFlop = 2,
        RoundTurn = 3,
        RoundRiver = 4,
        RoundEnd = 5
    }

    /** UserActionKind enum. */
    enum UserActionKind {
        ActionInvalid = 0,
        ActionPostSmallBlind = 10,
        ActionPostBigBlind = 11,
        ActionFold = 20,
        ActionBet = 21,
        ActionCall = 22,
        ActionRaise = 23,
        ActionAllIn = 24,
        ActionCheck = 25,
        ActionShowHole = 26
    }

    /** CardRank enum. */
    enum CardRank {
        RankInvalid = 0,
        RankHighCard = 1,
        RankOnePair = 2,
        RankTwoPair = 3,
        RankThreeOfAKind = 4,
        RankStraight = 5,
        RankFlush = 6,
        RankFullHouse = 7,
        RankFourOfAKind = 8,
        RankStraightFlush = 9,
        RankRoyalFlush = 10
    }

    /** Properties of a GameUser. */
    interface IGameUser {

        /** GameUser UserID */
        UserID?: (number|null);

        /** GameUser Nickname */
        Nickname?: (string|null);

        /** GameUser Avatar */
        Avatar?: (string|null);

        /** GameUser ChairID */
        ChairID?: (number|null);

        /** GameUser Balance */
        Balance?: (number|null);

        /** GameUser CurrScore */
        CurrScore?: (number|null);
    }

    /** Represents a GameUser. */
    class GameUser implements IGameUser {

        /**
         * Constructs a new GameUser.
         * @param [p] Properties to set
         */
        constructor(p?: game.IGameUser);

        /** GameUser UserID. */
        public UserID: number;

        /** GameUser Nickname. */
        public Nickname: string;

        /** GameUser Avatar. */
        public Avatar: string;

        /** GameUser ChairID. */
        public ChairID: number;

        /** GameUser Balance. */
        public Balance: number;

        /** GameUser CurrScore. */
        public CurrScore: number;

        /**
         * Encodes the specified GameUser message. Does not implicitly {@link game.GameUser.verify|verify} messages.
         * @param m GameUser message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IGameUser, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameUser message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.GameUser;
    }

    /** Properties of a RecordListInfo. */
    interface IRecordListInfo {

        /** RecordListInfo Index */
        Index?: (number|null);

        /** RecordListInfo Code */
        Code?: (string|null);

        /** RecordListInfo Date */
        Date?: (number|null);

        /** RecordListInfo WinLose */
        WinLose?: (number|null);
    }

    /** Represents a RecordListInfo. */
    class RecordListInfo implements IRecordListInfo {

        /**
         * Constructs a new RecordListInfo.
         * @param [p] Properties to set
         */
        constructor(p?: game.IRecordListInfo);

        /** RecordListInfo Index. */
        public Index: number;

        /** RecordListInfo Code. */
        public Code: string;

        /** RecordListInfo Date. */
        public Date: number;

        /** RecordListInfo WinLose. */
        public WinLose: number;

        /**
         * Encodes the specified RecordListInfo message. Does not implicitly {@link game.RecordListInfo.verify|verify} messages.
         * @param m RecordListInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: game.IRecordListInfo, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecordListInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RecordListInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): game.RecordListInfo;
    }
}
 
}
export {}