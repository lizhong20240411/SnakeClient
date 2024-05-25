//---------------------------------------------------------------------
// QR8bitByte
//---------------------------------------------------------------------

import { QRBitBuffer } from "./QRBitBuffer";
import { QRMode } from "./QRConst";

export class QR8bitByte
{
    private mode:QRMode
	private data;
    constructor (data) {
        this.mode = QRMode.MODE_8BIT_BYTE;
        this.data = data;
    }

	getLength (buffer:QRBitBuffer) {
		return this.data.length;
	}
	
	write (buffer:QRBitBuffer) {
		for (var i = 0; i < this.data.length; i++) {
			// not JIS ...
			buffer.put(this.data.charCodeAt(i), 8);
		}
	}
}