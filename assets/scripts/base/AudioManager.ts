import { _decorator, Component, Node, AudioSource, AudioClip } from 'cc';
import { BaseUI } from './BaseUI';
import { ResMgr } from './ResMgr';
import { GameConfig } from '../GameConfig';
import { UIDataNotify } from '../model/UIDataNotify';
import { PersistenceData } from '../model/PersistenceData';
const { ccclass, property } = _decorator;

@ccclass('AudioManager')
export class AudioManager extends BaseUI 
{
    public static Instance : AudioManager = null;
    mCurrentBGM : AudioSource = null;
    mCurrentEffect : AudioSource = null;
    mMuteBGM : boolean = false;
    mMuteEffect  : boolean = false;

    mBGMVolume : number = 1;
    mEffectVolume :number = 1;

    InitParam()
    {
        AudioManager.Instance = this;
        this.mCurrentBGM = new AudioSource();
        this.mCurrentEffect = new AudioSource();
    }
    BindUI()
    {

        
    }
    RegDataNotify()
    {
        UIDataNotify.Instance.Data_Mute.AddListenner(this , (_data)=>
        {
            this.MuteAll(_data);
            PersistenceData.SaveMute(_data)
        })
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        UIDataNotify.Instance.RemoveAllDataListennerByTarget(this);
    }

    private GetAudioSource(_bundle:string , _path : string , _loadCallback:Function)
    {
        ResMgr.GetAssetInBundle(_bundle,_path,AudioClip,(_audioClip)=>
        {
            if(_loadCallback != null)
            {
                _loadCallback(_audioClip);
            }
        });
    }

    public SetAllVolume(_volume : number)
    {
        this.SetBGMVolume(_volume);
        this.SetEffectVolume(_volume);
    }

    public SetBGMVolume(_volume : number)
    {
        this.mBGMVolume = _volume;
        if(this.mCurrentBGM!=null)
        {
            this.mCurrentBGM.volume = _volume;
        }
    }

    public SetEffectVolume(_volume : number)
    {
        this.mEffectVolume = _volume;
        if(this.mCurrentEffect!=null)
        {
            this.mCurrentEffect.volume = _volume;
        }
    }

    public PlayEffectOneShot(_bundle:string , _path : string)
    {
        if(this.mMuteEffect)
        {
            return;
        }

        this.GetAudioSource(_bundle , _path , (_audioClip)=>
        {
            this.mCurrentEffect.clip = _audioClip;
            this.mCurrentEffect.volume = this.mEffectVolume;
            this.mCurrentEffect.playOneShot(this.mCurrentEffect.clip);
        })
    }

    public PlayBGMMusic(_bundle:string , _path : string , _loop : boolean = false)
    {
        this.GetAudioSource(_bundle , _path , (_audioClip)=>
        {
            this.mCurrentBGM.clip = _audioClip;
            this.mCurrentBGM.volume = this.mBGMVolume;
            this.mCurrentBGM.loop = _loop;
            if(this.mMuteBGM == false)
            {
                this.mCurrentBGM.play();
            }
        })
    }

    public StopBGMMusic()
    {
        if(this.mCurrentBGM != null)
        {
            this.mCurrentBGM.stop();
        }
    }

    public RewindBGMMusic()
    {
        if(this.mCurrentBGM != null)
        {
            this.mCurrentBGM.volume = this.mBGMVolume;
            this.mCurrentBGM.play();
        }
    }

    public MuteBGM(_value : boolean)
    {
        this.mMuteBGM = _value;
        if(_value)
        {
            this.StopBGMMusic();
        }
        else
        {
            this.RewindBGMMusic();
        }
    }

    public MuteEffect(_value : boolean)
    {
        this.mMuteEffect = _value;
        if(_value)
        {
            if(this.mCurrentEffect != null)
            {
                this.mCurrentEffect.stop();
            }
        }
    }

    public MuteAll(_value : boolean)
    {
        this.MuteBGM(_value);
        this.MuteEffect(_value);
    }
}

